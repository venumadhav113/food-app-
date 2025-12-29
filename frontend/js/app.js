fetch('http://backend:5000/api/menu')
  .then(res => res.json())
  .then(data => {
    let html = '';
    data.forEach(item => {
      html += `
      <div class="col-md-4 col-sm-6 mt-3">
        <div class="card">
          <div class="card-body text-center">
            <h5>${item.name}</h5>
            <p>₹${item.price}</p>
          </div>
        </div>
      </div>`;
    });
    document.getElementById('menu').innerHTML = html;
  });
