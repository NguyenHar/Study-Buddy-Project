using System;
using System.Collections.Generic;

namespace Study_Buddy_Backend.Models;

public partial class Prompt
{
    public int Id { get; set; }

    public string? Question { get; set; }

    public string? Answer { get; set; }

    public virtual ICollection<Favorited> Favoriteds { get; set; } = new List<Favorited>();
}
