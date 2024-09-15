document.getElementById('logout').addEventListener('click', function() {
    fetch('logout.php')
    .then(() => window.location.href = 'login.html');
});

document.getElementById('add-brand').addEventListener('click', function() {
    // Marka ekleme popup'ını aç
    var brandName = prompt('Marka Adı:');
    var brandPassword = prompt('Marka Şifresi:');
    var brandLogo = prompt('Marka Logosu URL:');

    fetch('add_brand.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            'name': brandName,
            'password': brandPassword,
            'logo': brandLogo
        })
    })
    .then(response => response.json())
    .then(data => {
        // Markayı container'a ekle
        if (data.success) {
            var container = document.getElementById('container');
            var div = document.createElement('div');
            div.innerHTML = `
                <img src="${brandLogo}" alt="${brandName}" />
                <h2>${brandName}</h2>
                <button onclick="viewData(${data.brandId})">Verileri Görüntüle</button>
            `;
            container.appendChild(div);
        }
    });
});

function viewData(brandId) {
    // Verileri görüntülemek için bir popup aç
}

function viewData(brandId) {
    var month = prompt('Ay:');
    var adBudget = prompt('Reklam Bütçesi:');
    var adRevenue = prompt('Reklam Cirosu:');
    var totalRevenue = prompt('Toplam Ciro:');
    var organicRevenue = prompt('Organik Ciro:');
    var adProfit = prompt('Reklamın Getiri Miktarı:');
    var roi = prompt('Reklam Getirisinin Ciroya Oranı (%):');
    var roas = prompt('ROAS:');

    fetch('add_data.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            'brandId': brandId,
            'month': month,
            'adBudget': adBudget,
            'adRevenue': adRevenue,
            'totalRevenue': totalRevenue,
            'organicRevenue': organicRevenue,
            'adProfit': adProfit,
            'roi': roi,
            'roas': roas
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Grafik oluşturma kodunu buraya ekleyin
        }
    });
}
function generateChart(data) {
    var ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.months,
            datasets: [{
                label: 'Reklam Bütçesi',
                data: data.adBudgets,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }, {
                label: 'Reklam Cirosu',
                data: data.adRevenues,
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
