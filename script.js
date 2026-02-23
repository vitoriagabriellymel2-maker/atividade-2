function validar(){

   // CAPTAR VARIÁVEIS
   const nome = document.getElementById('nome').value;
   const idade = Number(document.getElementById('idade').value);
   const nivel = Number(document.getElementById('nivel').value);
   const senha1 = document.getElementById('senha1').value;
   const senha2 = document.getElementById('senha2').value;
   const estudante = document.getElementById('estudante').checked;

   const msg = document.getElementById('mensagem');

   //  DESAFIO 3 — BOUNCER
   if (nome === "" || idade < 0){
       msg.innerText = "Erro: nome vazio ou idade inválida";
       msg.style.color = "red";
       return;
   }

   //  DESAFIO 1 — SENHA
   if (senha1 !== senha2 || senha1.length < 8){
       msg.innerText = "Erro: senha inválida ou não coincide";
       msg.style.color = "red";
       return;
   }

   //  DESAFIO 2 — PROMOÇÃO (OU)
   if (idade > 60 || estudante){
       msg.innerText = "Inscrição aceita! Desconto especial aplicado!";
       msg.style.color = "green";
       return;
   }

   // SISTEMA ORIGINAL
   if (idade >= 16 && nivel > 5){
       msg.innerText = "Inscrição aceita: Categoria PRO";
       msg.style.color = "green";

   } else if (idade >= 16 && nivel <= 5){
       msg.innerText = "Inscrição aceita: Categoria INICIANTE";
       msg.style.color = "blue";

   } else {
       msg.innerText = "Inscrição negada: idade mínima é 16 anos";
       msg.style.color = "red";
   }
}