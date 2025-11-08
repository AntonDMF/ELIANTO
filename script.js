const copyBtn = document.getElementById('copyIban');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const ibanText = document.getElementById('iban')?.textContent?.trim() ?? '';
    if (!ibanText) return;
    try {
      await navigator.clipboard.writeText(ibanText);
      copyBtn.textContent = '✅ Copiato';
      setTimeout(()=> (copyBtn.textContent='📋 Copia IBAN'), 1500);
    } catch (e) {
      alert('Non sono riuscito a copiare. Copia manualmente: ' + ibanText);
    }
  });
}