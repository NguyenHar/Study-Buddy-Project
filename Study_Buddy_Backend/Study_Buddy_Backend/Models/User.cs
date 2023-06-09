using System;
using System.Collections.Generic;

namespace Study_Buddy_Backend.Models;

public partial class User
{
    public int Id { get; set; }

 
    public string Name { get; set; }

    public virtual ICollection<Favorited> Favoriteds { get; set; } = new List<Favorited>();
}
