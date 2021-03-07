$("document").ready(function() {
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0.",
        type: "GET",
        dataType: "JSON",
        success: function(data) {
            console.log(data.results);
            const arr = data.results;
            const nombres = arr.map(function(x) {
                
                let pokeNombre = x.name.toUpperCase();
                
                return pokeNombre;
            });

            for (const i of nombres) {
                $("#pokeSelect").append(`
                    <option value="${i}">${i}</option>
                `);
            };
            
            for (const j of nombres) {
                $("#pokeSelect2").append(`
                    <option value="${j}">${j}</option>
                `);
            };
            
        }
    });

    /***Poke1***/

    $("#pokeSelect").on("click", function(y) {
        
        const pokeSelected = y.target.value;
        const pokeNormal = pokeSelected.toLowerCase();
        
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${pokeNormal}`,
            type: "GET",
            dataType: "JSON",
            success: function(dato) {
                const pokename = dato.name.toUpperCase();
                
                
                $("#nombreVista").text(pokename)
                
                const pokeFront = dato.sprites.front_default;
                $("#pokeFoto").attr("src", pokeFront);

                // ID y TIPO

                const pokeID = dato.id;
                $("#id").text(pokeID);

                const pokeTipo = dato.types[0].type.name;
                $("#type").text(pokeTipo);
                console.log(pokeTipo);

               
                
                // STATS
                const puntosSalud = dato.stats[0].base_stat;
                $("#hp").text(puntosSalud);
                const puntosAtaque = dato.stats[1].base_stat;
                $("#attack").text(puntosAtaque);
                const puntosDefensa = dato.stats[2].base_stat;
                $("#defense").text(puntosDefensa);
                const ataqueEspecial = dato.stats[3].base_stat;
                $("#specialAtack").text(ataqueEspecial);
                const defensaEspecial = dato.stats[4].base_stat;
                $("#specialDefense").text(defensaEspecial);
                const velocidad = dato.stats[5].base_stat;
                $("#speed").text(velocidad);

                
                
                
                const puntosStatsVal1 = [puntosSalud, puntosAtaque, puntosDefensa, ataqueEspecial,
                    defensaEspecial, velocidad];
                    const pokeStatsName = ["Salud", "Ataque", "Defensa", "Ataque ESP", "Defensa ESP", "Velocidad"];
                    const ctx = document.querySelector("#graph");
                    $(".main__pokeGraph-color").addClass("lightGray")
                    $(".main__poke-1").addClass("pokeStile-1")   
                    
                    const graficoPoke = new Chart(ctx, {
                        type: "horizontalBar",
                        data: {
                            labels: pokeStatsName,
                            datasets: [{
                                data: puntosStatsVal1,
                                label: [pokeNormal,],
                                backgroundColor: [
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                
                            }],
                
                        },
                        options: {
                            scales: { 
                                xAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        } 
                       
                    })
                    
            }
        });
        
          
    });

    
    /***Poke2***/
    
    $("#pokeSelect2").on("click", function(z) {
        
        const pokeSelected2 = z.target.value;
        const pokeNormal2 = pokeSelected2.toLowerCase();
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${pokeNormal2}`,
            type: "GET",
            dataType: "JSON",
            success: function(dato) {
                const pokename2 = dato.name.toUpperCase();
                console.log(dato);
                $("#nombreVista2").text(pokename2)
                console.log(dato);
                const pokeFront2 = dato.sprites.front_default;
                $("#pokeFoto2").attr("src", pokeFront2);

                // ID y TIPO

                const pokeID2 = dato.id;
                $("#id2").text(pokeID2);

                const pokeTipo2 = dato.types[0].type.name;
                console.log(dato.types);
                $("#type2").text(pokeTipo2);

                // STATS
                const puntosSalud2 = dato.stats[0].base_stat;
                $("#hp2").text(puntosSalud2);
                const puntosAtaque2 = dato.stats[1].base_stat;
                $("#attack2").text(puntosAtaque2);
                const puntosDefensa2 = dato.stats[2].base_stat;
                $("#defense2").text(puntosDefensa2);
                const ataqueEspecial2 = dato.stats[3].base_stat;
                $("#specialAtack2").text(ataqueEspecial2);
                const defensaEspecial2 = dato.stats[4].base_stat;
                $("#specialDefense2").text(defensaEspecial2);
                const velocidad2 = dato.stats[5].base_stat;
                $("#speed2").text(velocidad2);

                let puntosStatsVal2 = [puntosSalud2, puntosAtaque2, puntosDefensa2, ataqueEspecial2,
                    defensaEspecial2, velocidad2];
                 
                $(".main__pokeGraph-color").addClass("lightGray")
                $(".main__poke-2").addClass("pokeStile-2")   
                 const pokeStatsName = ["Salud", "Ataque", "Defensa", "Ataque ESP", "Defensa ESP", "Velocidad"];
                 const ctx = document.querySelector("#graph");

                const graficoPoke = new Chart(ctx, {
                        type: "horizontalBar",
                        data: {
                            labels: pokeStatsName,
                            datasets: [{
                                data: puntosStatsVal2,
                                label: [pokeNormal2,],
                                backgroundColor: [
                                    'rgb(242, 43, 103)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)',
                                ]
                                
                                
                            }]
                
                        },
                        options: {
                            scales: { 
                                xAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }
                        
                    })
                    
                }
            });
            
            
    });
    
    /***ChartJS***/
      

    
    
    
   

    // const graficoPoke = new Chart(ctx, {
    //     type: "radar",
    //     data: {
    //         labels: pokeStatsName,
    //         datasets: [{
    //             data: puntosStatsVal1,
    //             label: [pokeNormal],
    //         }]
    //     }
    // })

    
});
