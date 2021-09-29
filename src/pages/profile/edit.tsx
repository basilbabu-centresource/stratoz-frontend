import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../../layout/Default";
import styles from "../../../styles/EditProfile.module.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import FormButton from "../../components/FormButton";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../api";

type Inputs = {
  name: string;
  email: string;
  mobile: string;
};

const EditProfile: NextPage = () => {
  const { user } = useSelector(selectUser);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const handleEditProfile = (data: any) => {
    console.log(data);

    const userData = {
      email: data.email || user.email,
      mobile: data.mobile || user.mobile,
      name: data.name || user.name,
    };

    api
      .put(`/users/${user.id}`, userData)
      .then(() => {
        toast.success("Profile edited successfully");
      })
      .catch((error) => {
        console.log("Error: ", error.response.data.message[0]);

        if (error.response.data.message[0]) {
          error.response.data.message[0].messages.map((message: any) => {
            toast.error(message.message);
          });
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
                    <h4>Edit Profile</h4>
                    <div className={styles.row}>
                      <div className={styles.col12}>
                        <label>Name</label>
                        <input
                          type="text"
                          placeholder={user?.name}
                          {...register("name", { required: false })}
                        />
                        <label>Email</label>
                        <input
                          type="email"
                          placeholder={user?.email}
                          {...register("email", { required: false })}
                        />
                        <label>Mobile</label>
                        <input
                          type="text"
                          placeholder={user?.mobile}
                          {...register("mobile", { required: false })}
                        />
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

export default EditProfile;
