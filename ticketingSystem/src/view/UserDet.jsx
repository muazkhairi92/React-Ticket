import useAuth from "../hooks/useAuth";

export const UserDet = () => {
    const { user } = useAuth();

   
    return (
      <main style={{ padding: '1rem 0',display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center", width:"60%"}}>
        <h2>Email</h2>
        <h3>Welcome {user.name}</h3>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi ratione et fuga nihil, vero nesciunt aperiam nam cupiditate cumque quis saepe. Est excepturi commodi iusto, reiciendis itaque consequuntur ut ex!</p>
      </main>
    );
  };