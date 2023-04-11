import { JwtAdapter } from "../../../shared/util/jwt.adapter";
import { Return } from "../../../shared/util/return.contract";
import { UsuarioRepository } from "../../usuario/database/usuario.repository";

interface LoginParams {
  username: string;
  password: string;
}

export class LoginUsecase {
  public async execute(data: LoginParams): Promise<Return> {
    const repository = new UsuarioRepository();
    const usuario = await repository.getByUsername(
      data.username,
      data.password
    );

    if (!usuario) {
      return {
        ok: false,
        message: "Username/Senha incorretos!",
        code: 401,
      };
    }

    const token = JwtAdapter.createToken(usuario);

    return {
      ok: true,
      message: "Login feito com sucesso",
      data: {
        ...usuario,
        token,
      },
      code: 200,
    };
  }
}
