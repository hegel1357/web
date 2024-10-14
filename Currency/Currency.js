$(document).ready(function () {
    // 匯率
    const ntdToUsdRate = 28; // 台幣對美元
    const ntdToJpyRate = 0.27; // 台幣對日幣

    // 當輸入台幣時觸發的函數
    function ntd_to_else() {
        var ntd = parseFloat($('#ntd').val());
        if (!isNaN(ntd)) {
            var usd = (ntd / ntdToUsdRate).toFixed(3);
            var jpy = (ntd / ntdToJpyRate).toFixed(3);
            $('#usd').val(usd);
            $('#jpy').val(jpy);
        }
    }

    // 當輸入日幣時觸發的函數
    function jpy_to_else() {
        var jpy = parseFloat($('#jpy').val());
        if (!isNaN(jpy)) {
            var ntd = (jpy * ntdToJpyRate).toFixed(3);
            var usd = (ntd / ntdToUsdRate).toFixed(3);
            $('#ntd').val(ntd);
            $('#usd').val(usd);
        }
    }

    // 當輸入美元時觸發的函數
    function usd_to_else() {
        var usd = parseFloat($('#usd').val());
        if (!isNaN(usd)) {
            var ntd = (usd * ntdToUsdRate).toFixed(3);
            var jpy = (ntd / ntdToJpyRate).toFixed(3);
            $('#ntd').val(ntd);
            $('#jpy').val(jpy);
        }
    }

    // 綁定事件，使用 `input` 事件即時觸發
    $('#ntd').on('input', ntd_to_else);
    $('#jpy').on('input', jpy_to_else);
    $('#usd').on('input', usd_to_else);
});
