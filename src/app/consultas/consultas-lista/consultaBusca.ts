import { Funcionario } from "../../funcionarios/funcionario";
import { Paciente } from "../../pacientes/paciente";

export class ConsultaBusca {
  descricao!: string;
  valor!: number;
  data!: string;
  paciente!: Paciente;
  funcionario!: Funcionario;
  id: any;
}
