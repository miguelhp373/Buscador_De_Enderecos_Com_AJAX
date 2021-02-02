$("#btn-save").click(function () {
    console.log("Save Button Is Clicked")

    var cep = $("#cepField").val();
    var ApiUrl = "https://viacep.com.br/ws/" + cep + "/json/"

    $.ajax({
        type: "POST",
        url: ApiUrl,
        data: {},
        dataType: "Jsonp",
        success: function (data) {
            console.log("Operation Return Informations", data)
            document.cookie = `cep=${$('#cepField').val()}`;
            document.cookie = `rua=${data.logradouro}`;
            document.cookie = `bairro=${data.bairro}`;
            document.cookie = `cidade=${data.localidade}`;
            document.cookie = `estado=${data.uf}`;
            document.cookie = `ddd=${data.ddd}`;

        }
    });

    var Infos = {
        cep: $("#cepField").val(),
    }

    console.log("teste Post:", Infos)

    $.ajax({
        type: "POST",
        url: "action/save.php?info=1",
        dataType: "TEXT",
        data: Infos,
        beforeSend: function () {
            $("#status-save").html("Salvando...");
        },
        success: function (data) {
            $("#status-save").html("Salvo");
            console.log("Salvo Com Sucesso!")


        },
        error: function (error) {
            console.log(error);
        }
    });



})