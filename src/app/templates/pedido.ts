const templateHTMLPedido = `

<div style="font-family: Arial, sans-serif; background:#f4f6fa; padding:40px 0;">

  <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:8px; overflow:hidden;">

    <!-- HEADER -->
    <div style="background:#0d1b52; padding:25px 30px;">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Eventim_logo.svg/512px-Eventim_logo.svg.png"
           alt="Eventim"
           style="height:32px;">
    </div>

    <!-- CONTENT -->
    <div style="padding:40px 35px;">

      <h2 style="color:#0d1b52; margin-bottom:10px; font-size:22px;">
        Seu Código de Uso Único
      </h2>

      <p style="font-size:16px; color:#333;">
        Olá <strong>{{NOME}}</strong>,
      </p>

      <p style="font-size:15px; color:#555;">
        Para ativar sua conta, precisamos confirmar seu endereço de e-mail.
      </p>

      <p style="font-size:15px; color:#555; margin-bottom:15px;">
        Insira o seguinte código no campo correspondente:
      </p>

      <!-- CÓDIGO -->
      <div style="
        background:#e7f1ff;
        padding:18px;
        border-radius:6px;
        font-size:30px;
        font-weight:bold;
        text-align:center;
        letter-spacing:4px;
        color:#0d1b52;
        margin-bottom:20px;">
        {{CODIGO}}
      </div>

      <p style="font-size:14px; color:#666;">
        O código é válido por <strong>30 minutos</strong>.
      </p>

      <p style="font-size:14px; color:#666; margin-top:20px;">
        Se você não fez esta solicitação, pode ignorar esta mensagem.<br>
        Este é um e-mail automático. Por favor, não responda este e-mail.
      </p>

      <br>

      <p style="font-size:14px; color:#333;">
        Atenciosamente, <br>
        <strong>Eventim Brasil</strong>
      </p>

    </div>
  </div>

  <p style="text-align:center; color:#888; font-size:13px; margin-top:20px;">
    Enviado por <strong>eventim-ingressos.site</strong>
  </p>
</div>

`;

export default templateHTMLPedido;