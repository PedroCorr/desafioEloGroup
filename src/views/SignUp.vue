<template>
  <div class="container">
    <div class="login">
      <Logo />
      <form id="login-form" @submit.prevent="submitForm">
        <Input label="Usuario" required v-model="input_usuario" />
        <Input
          label="Senha"
          required
          type="password"
          v-model="input_password"
        />
        <Input
          label="Confirmar senha"
          required
          type="password"
          v-model="input_confirm_pass"
        />

        <Button type="submit">Registrar</Button>
      </form>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input";
import Button from "@/components/Button";
import Logo from "@/components/LogoComponent";

export default {
  name: "App",
  components: {
    Input,
    Button,
    Logo,
  },
  data() {
    return {
      usuario: "",
      password: "",
      confirm_pass: "",
      input_usuario: "",
      input_password: "",
      input_confirm_pass: "",
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();

      if (this.input_password === this.input_confirm_pass) {
        if (this.senhaValida(this.input_password)) {
          this.usuario = this.input_usuario;
          this.password = this.input_password;
          this.confirm_pass = this.input_confirm_pass;
          window.location.href = "showleads";
        }
      } else {
        window.alert("A senha e a confirmação não conferem");
      }
    },

    senhaValida(p) {
      var retorno = false;
      var letrasMaiusculas = /[A-Z]/;
      var letrasMinusculas = /[a-z]/;
      var numeros = /[0-9]/;
      var caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

      if (p.length < 8) {
        window.alert("Senha menor que 8 caractéres");
        return retorno;
      }

      var auxMaiuscula = 0;
      var auxMinuscula = 0;
      var auxNumero = 0;
      var auxEspecial = 0;

      for (var i = 0; i < p.length; i++) {
        if (letrasMaiusculas.test(p[i])) auxMaiuscula++;
        else if (letrasMinusculas.test(p[i])) auxMinuscula++;
        else if (numeros.test(p[i])) auxNumero++;
        else if (caracteresEspeciais.test(p[i])) auxEspecial++;
      }
      if (auxMaiuscula > 0 || auxMinuscula > 0) {
        if (auxNumero > 0) {
          if (auxEspecial) {
            retorno = true;
          }
        }
      }

      if (retorno) {
        alert("Cadastrado com sucesso");
        return true;
      } else {
        alert("Error ao cadastrar");
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.login {
  border: 1px solid black;
  padding: 24px;
  padding-bottom: 30px;
  width: 100%;
  max-width: 340px;
}

#login-form {
  padding: 0 10px;
}
</style>

