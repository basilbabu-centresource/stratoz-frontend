import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../../layout/Default";
import styles from "../../../styles/EditProfile.module.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import FormButton from "../../components/FormButton";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../api";

type Inputs = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

const ChangePassword: NextPage = () => {
  const { user } = useSelector(selectUser);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  
  const handleEditProfile = (data: any) => {

    const userData = {
      password: data.newPassword,
      current_password: data.currentPassword,
      password_confirmation: data.confirmNewPassword,
    };

    api
      .post("/auth/change-my-password", userData)
      .then(() => {
        toast.success("Password changed successfully");
      })
      .catch((error) => {
        console.log("Error: ", error.response.data);

        if (error.response.data) {
          
          if(error.response.data.current_password){
            toast.error(error.response.data.current_password[0]);
          }
          if(error.response.data.password){
            toast.error(error.response.data.password[0]);
          }
          // error.response.data.message[0].messages.map((message: any) => {
          //   toast.error(message.message);
          // });
        } else toast.error("Something went wrong");
      });
  };

  return (
    <>
      <LayoutDefault>
        <div className={styles.bghero}>
          <div className={styles.bgContainer}>
            <div className="container">
              <div className={styles.bgheroFrom}>
                <div className={styles.heroFrom}>
                  <form onSubmit={handleSubmit(handleEditProfile)}>
                    <h4>Change password</h4>
                    <div className={styles.row}>
                      <div className={styles.col12}>
                        <label>Current Password</label>
                        <input
                          type="password"
                          {...register("currentPassword", { required: true })}
                        />
                        <span className="error">
                          {errors.currentPassword && errors.currentPassword.type === "required" && (
                            <span>Current Password is required</span>
                          )}
                        </span>
                      </div>
                      <div className={styles.col12}>
                        <label>New password</label>
                        <input
                          type="password"
                          {...register("newPassword", { required: true })}
                        />
                        <span className="error">
                          {errors.newPassword && errors.newPassword.type === "required" && (
                            <span>New Password is required</span>
                          )}
                        </span>
                      </div>
                      <div className={styles.col12}>
                        <label>Confirm new password</label>
                        <input
                          type="password"
                          {...register("confirmNewPassword", {
                            required: true,
                          })}
                        />
                        <span className="error">
                          {errors.confirmNewPassword && errors.confirmNewPassword.type === "required" && (
                            <span>Confirm Password is required</span>
                          )}
                        </span>
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.col12}>
                        <FormButton
                          value={"Submit"}
                          loading={false}
                          disabled={false}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutDefault>
    </>
  );
};

export default ChangePassword;
