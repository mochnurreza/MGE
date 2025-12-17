import {registerService, loginService} from "../service/auth.service.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const {token, user} = await loginService(email, password);
        return res.status(200)
                  .json({ success: true, 
                          token,
                          user
                        });  
    } catch (error) {
        res.status(401).json({ success: false, message: error.message });
    }
};

export const register = async (req, res) => {
  try {
    const result = await registerService(req.body);

    return res.status(201).json({
      success: true,
      data: result,
    });
  } catch (err) {
    console.error("REGISTER ERROR:", err);

    return res.status(err.statusCode || 500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
};
