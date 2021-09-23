import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../../layout/Default";
import styles from "../../../styles/EditProfile.module.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import FormButton from "../../components/FormButton";

const EditProfile: NextPage = () => {
  const { user } = useSelector(selectUser);

  return (
    <>
      <LayoutDefault>
        <div className={styles.bghero}>
          <div className={styles.bgContainer}>
            <div className="container">
              <div className={styles.bgheroFrom}>
                <div className={styles.heroFrom}>
                  <h4>Edit Profile</h4>
                  <div className={styles.row}>
                    <div className={styles.col12}>
                      <label>Name</label>
                      <input type="text" placeholder={user?.name} />
                      <label>Email</label>
                      <input type="email" placeholder={user?.email} />
                      <label>Mobile</label>
                      <input type="text" placeholder={user?.mobile} />
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
