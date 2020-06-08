﻿$(function () {
    $("#SelectCategory").on("change", function () {
        var url = $(this).val();

        if (url) {
            window.location = "/admin/shop/Products?catId=" + url;
        }

        return false;
    });

    $("a.delete").click(function () {
        if (!confirm("Подтверждаете удаление товара?")) {
            return false;
        }
    });
});