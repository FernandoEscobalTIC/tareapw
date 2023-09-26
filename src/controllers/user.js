import { PrismaClient } from "@prisma/client";
import utils from "../../config/enviromentValidator.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const createUser = async (req, res) => {
  try {
    const {email,password} = req.body;

    //encripta la pass y carga el user en la tabla
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    res.json({ message: 'Usuario registrado con éxito' });

  } catch (error) {

    res.status(500).json({ error: 'Error al registrar el usuario' });

  }
};

const loginUser = async (req, res) => {
  try {
    //comprueba existencia
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    //compara
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    //genera el token
    const token = jwt.sign({ userId: user.id }, utils.validateSecretKey(), { expiresIn: '1h' });
    res.json({ token });

  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

export { createUser, loginUser};
