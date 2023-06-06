using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Study_Buddy_Backend.Models;

public partial class StudyBuddyContext : DbContext
{
    public StudyBuddyContext()
    {
    }

    public StudyBuddyContext(DbContextOptions<StudyBuddyContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Favorited> Favoriteds { get; set; }

    public virtual DbSet<Prompt> Prompts { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=StudyBuddy;Trusted_Connection=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Favorited>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Favorite__3213E83F99C589C6");

            entity.ToTable("Favorited");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.PromptId).HasColumnName("Prompt_Id");
            entity.Property(e => e.UserId).HasColumnName("User_Id");

            entity.HasOne(d => d.Prompt).WithMany(p => p.Favoriteds)
                .HasForeignKey(d => d.PromptId)
                .HasConstraintName("FK__Favorited__Promp__3C69FB99");

            entity.HasOne(d => d.User).WithMany(p => p.Favoriteds)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Favorited__User___3B75D760");
        });

        modelBuilder.Entity<Prompt>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Prompt__3213E83FF69DDC71");

            entity.ToTable("Prompt");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Answer).HasMaxLength(255);
            entity.Property(e => e.Question).HasMaxLength(100);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__User__3213E83F321E7994");

            entity.ToTable("User");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Name).HasMaxLength(30);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
