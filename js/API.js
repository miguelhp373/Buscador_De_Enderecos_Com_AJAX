$(document).ready(function () {
    $("#btn-search").click(function () {
        if ($("#cep-input").val().length >= 5) {
            var cep = $("#cep-input").val();
            var ApiUrl = "https://viacep.com.br/ws/" + cep + "/json/"

            $.ajax({
                type: "GET",
                url: ApiUrl,
                data: {},
                dataType: "Jsonp",
                beforeSend: function () {
                    $("#search-text").css("color", "green");
                    $("#search-text").html("Buscando....");
                },
                success: function (data,error) {
                    

                    console.log(data);//dados buscados da aplicação
                    console.log(error);//mostra se foi sucesso ou erro 

                    if ((data != null)&&(data.erro != true)) {
                        $("#search-text").css("color", "green");
                        $("#search-text").html("Pronto....");
                        $("#01-result").html("RUA: "+ data.logradouro);
                        $("#02-result").html("Bairro: "+ data.bairro);
                        $("#03-result").html("Cidade: "+ data.localidade);
                        $("#04-result").html("Estado: "+ data.uf);
                        $("#05-result").html("DDD: "+ data.ddd);

                        $("#btn-save").attr("disabled",false);//ativa o botao de salvar

                    }else {
                        $("#search-text").css("color", "red");
                        $("#search-text").html("Erro....CEP Não Existente"); 
                    }
                },
                error: function (error) {
                    $("#search-text").css("color", "red");
                    $("#search-text").html("Erro....CEP Não Existente"); 
                    
                },
                complete: function () {
                    console.log("Conectado ao Servidor")
                    $("#btn-save").click(function(){
                        alert("teste")
                    })
                    //date("Y-m-d H:i:s").txt;
                }
            });

        } else {
            alert("Prencha o Campo e Tente Novamente!")
        }
    })

});