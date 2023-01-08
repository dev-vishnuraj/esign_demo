import styles from "./styles.module.css";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.reload();
  };
  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Main Component here</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Main;
