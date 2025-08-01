namespace TodoApi.Models;

public class TodoItemDTO
{
    public long Id { get; set; }
    public string? Name { get; set; }
    public string? User { get; set; }
    public bool IsComplete { get; set; }
}