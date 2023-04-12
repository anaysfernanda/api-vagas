import { Recrutador } from "../../../models/recrutador.model";
import { Return } from "../../../shared/util/return.contract";
import { UsuarioRepository } from "../../usuario/database/usuario.repository";

interface CreateRecrutadorParams {
  nome: string;
  username: string;
  password: string;
  nomeEmpresa: string;
}

export class CreateRecrutadorUsecase {
  public async execute(data: CreateRecrutadorParams): Promise<Return> {
    // 1 - Validar se o usuario ja existe (username)
    const repository = new UsuarioRepository();

    // 2 - criar model Recrutador
    const recrutador = new Recrutador(
      data.nome,
      data.username,
      data.password,
      data.nomeEmpresa
    );
    // 3 - salvar o usuario no DB

    const result = await repository.create(recrutador);
    // 4 - retornar o usuario criado

    return {
      ok: true,
      code: 201,
      message: "Usuário criado com sucesso!",
      data: result,
    };
  }
}