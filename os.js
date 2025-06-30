
function consultarOS() {
  const codigo = document.getElementById('codigo').value.trim();
  const osData = localStorage.getItem('OS_' + codigo);
  const output = document.getElementById('resultadoConsulta');
  if (osData) {
    const os = JSON.parse(osData);
    output.innerHTML = `
      <p><strong>Cliente:</strong> ${os.cliente}</p>
      <p><strong>Problema:</strong> ${os.descricao}</p>
      <p><strong>Status:</strong> ${os.status}</p>
    `;
  } else {
    output.innerText = 'Ordem de Serviço não encontrada.';
  }
}
