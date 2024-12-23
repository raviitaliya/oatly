export const LoginAdmin = async (req, res) => {

  const { username, password } = req.body;

  try {
    const username = "Oatly123";
    const password = "Oatly123";

    if(username === username && password === password){
        return res
         .status(200)
         .json(200, "User Logged in Successfully")
    }else{
        return res
        .status(200)
        .json(200, "User Logged in Failed")
    }
  } catch (error) {}
};
