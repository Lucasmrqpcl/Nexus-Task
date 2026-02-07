using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        List<string> listaTarefas = new List<string>();
        string opcao = "";

        Console.WriteLine("--- MEU GERENCIADOR DE TAREFAS ---");

        while (opcao != "3")
        {
            Console.WriteLine("\nEscolha uma opção:");
            Console.WriteLine("1. Adicionar Tarefa");
            Console.WriteLine("2. Listar Tarefas");
            Console.WriteLine("3. Sair");
            Console.Write("Opção: ");
            opcao = Console.ReadLine();

            switch (opcao)
            {
                case "1":
                    Console.Write("Digite a descrição da tarefa: ");
                    string tarefa = Console.ReadLine();
                    listaTarefas.Add(tarefa);
                    Console.WriteLine("Tarefa adicionada com sucesso!");
                    break;

                case "2":
                    Console.WriteLine("\n--- SUAS TAREFAS ---");
                    if (listaTarefas.Count == 0) Console.WriteLine("Nenhuma tarefa pendente.");
                    for (int i = 0; i < listaTarefas.Count; i++)
                    {
                        Console.WriteLine($"{i + 1}. {listaTarefas[i]}");
                    }
                    break;

                case "3":
                    Console.WriteLine("Saindo... Até logo!");
                    break;

                default:
                    Console.WriteLine("Opção inválida, tente novamente.");
                    break;
            }
        }
    }
}