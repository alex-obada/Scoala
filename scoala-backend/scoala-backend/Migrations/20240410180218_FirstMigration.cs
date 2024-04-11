using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace scoala_backend.Migrations
{
    /// <inheritdoc />
    public partial class FirstMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Elevi",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nume = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Prenume = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    DataNasterii = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Specializare = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    Media = table.Column<double>(type: "float", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Elevi", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Elevi");
        }
    }
}
