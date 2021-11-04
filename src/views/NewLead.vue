<template>
  <div class="container">
    <div class="conteudo">
      <Logo />
      <form id="login-form">
        <Input label="Nome" required v-model="input_nome" placeholder="Nome" />
        <Input
          label="Telefone"
          required
          type="tel"
          v-model="input_telefone"
          placeholder="(11) 98888-7777"
        />
        <Input
          label="Email"
          required
          type="email"
          v-model="input_email"
          placeholder="teste@teste.com"
        />
      </form>
    </div>
    <div class="lead-container">
        <p class="name-page">Novo Lead</p>
      <table border="1">
        <tr>
          <th>
              <div class="checks">
                <input id="checkall" type="checkbox" @click="checked" />
              </div>
            </th>
          <th class="column-header-table">Oportunidades*</th>
        </tr>

        <tr>
          <td>
            <div class="checks"> 
                <input id="checkrpa" type="checkbox"/>
            </div>
          </td>
          <td>RPA</td>
        </tr>

        <tr>
          <td>
              <div class="checks"> 
                <input id="checkpd" type="checkbox" />
              </div>
            </td>
          <td>Produto Digital</td>
        </tr>

        <tr>
          <td>
              <div class="checks">
                <input id="checkan" type="checkbox" />
              </div>
            </td>
          <td>Analytics</td>
        </tr>

        <tr>
          <td>
              <div class="checks">
                <input id="checkbpm" type="checkbox" />
              </div>
            </td>
          <td>BPM</td>
        </tr>
      </table>
      <Button @click="salvar">SALVAR</Button>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input";
import Button from "@/components/Button";
import Logo from "@/components/LogoComponent";

export default {
  name: "NewLead",
  components: {
    Input,
    Button,
    Logo,
  },
  data() {
    return {
      input_nome: "",
      input_telefone: "",
      input_email: "",
      rpa: false,
      produto_digital: false,
      analytics: false,
      bpm: false,
      leads: [],
      newleads: [],
    };
  },
  methods: {
    salvar() {
      if (this.input_nome.length == 0) {
        window.alert("O campo Nome não pode estar vazio");
      } else {
        if (this.input_telefone.length == 0) {
          window.alert("O campo Telefone não pode estar vazio");
        } else {
          if (this.input_email.length == 0) {
            window.alert("O campo Email não pode estar vazio");
          } else {
            var lista_leads = JSON.parse(
              localStorage.getItem("lista-leads") || "[]"
            );
            lista_leads.push({
              nome: this.input_nome,
              telefone: this.input_telefone,
              email: this.input_email,
            });
            localStorage.setItem(
              "lista-leads",
              JSON.stringify(lista_leads)
            );
            window.alert("Lead incluído com sucesso");

            }
            window.location.href  = 'showleads'
          }
        }
      },
    
    check() {
      document.getElementById("checkrpa").checked = true;
      document.getElementById("checkpd").checked = true;
      document.getElementById("checkan").checked = true;
      document.getElementById("checkbpm").checked = true;
    },
    uncheck() {
      document.getElementById("checkrpa").checked = false;
      document.getElementById("checkpd").checked = false;
      document.getElementById("checkan").checked = false;
      document.getElementById("checkbpm").checked = false;
    },
    checked() {
      if (document.getElementById("checkall").checked == true) {
        this.check();
      } else {
        this.uncheck();
      }
    },
    }
  }

</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    width: 100%;
}
.conteudo, .lead-container {
    width: 100%;
    max-width: 340px;
}
.conteudo {
    margin-right: 40px;
}
.lead-container table {
    width: 100%;
    border-collapse: collapse;
    border-color: black;
}
.lead-container table tr th, .lead-container table tr td {
    padding: 4px;
}
.lead-container table tr:nth-child(odd) {
    background-color: #E7E6E8;
}
.lead-container table tr:first-of-type {
    background-color: #9F9E9F;
}
.checks {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.column-header-table {
    color: white;
}
.name-page {
    margin-bottom: 10px;
    font-size: 20px;
}

</style>
