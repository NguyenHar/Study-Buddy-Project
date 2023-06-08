using System;
using System.Collections.Generic;

namespace Study_Buddy_Backend.Models;

public partial class Favorited
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public int PromptId { get; set; }

    public virtual Prompt? Prompt { get; set; }

    public virtual User? User { get; set; }
}
