<template>
  <div class="container">
    <div class="conteudo">
    <Logo />
    <div class="button">
      <Button @click="newlead"> New Lead (+)</Button>
      <h2>Painel de Leads</h2>
      <Button @click="back">Voltar</Button>
    </div>
    <div class="board">
      <div class="lane">
        <h2 class="lane-title">Cliente em Potencial</h2>
        <Container
          group-name="leads"
          @drag-start="handleDragStart('cliente', $event)"
          @dragend="handleDrop('cliente', $event)"
          :get-child-payload="getChildPayLoad"
          :drop-placeholder="{ className: 'placeholder' }"
        >
          <Draggable v-for="lead in leads.cliente" :key="lead.cliente">
            <Lead>{{ lead.nome }}</Lead>
          </Draggable>
        </Container>
      </div>
      <div class="lane">
        <h2 class="lane-title">Dados Confirmados</h2>
        <Container
          group-name="leads"
          @drag-start="handleDragStart('dados', $event)"
          @dragend="handleDrop('dados', $event)"
          :get-child-payload="getChildPayLoad"
          :drop-placeholder="{ className: 'placeholder' }"
        >
          <Draggable>
            <!-- <Lead></Lead> -->
          </Draggable>
        </Container>
      </div>
      <div class="lane">
        <h2 class="lane-title">Reunião Agendada</h2>
        <Container
          group-name="leads"
          @drag-start="handleDragStart('reuniao', $event)"
          @dragend="handleDrop('reuniao', $event)"
          :get-child-payload="getChildPayLoad"
          :drop-placeholder="{ className: 'placeholder' }"
        >
          <Draggable>
            <!-- <Lead></Lead> -->
          </Draggable>
        </Container>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Button";
import Logo from "@/components/LogoComponent";
import Lead from "@/components/Lead";
import { Container, Draggable } from "vue-smooth-dnd";

export default {
  name: "ShowLeads",
  components: {
    Button,
    Logo,
    Lead,
    Container,
    Draggable,
  },

  data() {
    return {
      newLead: "",
      leads: {
        cliente: JSON.parse(localStorage.getItem("lista-leads")),
        dados: [],
        reuniao: [],
      },
      draggingLead: {
        lane: "",
        index: -1,
        leadData: {},
      },
    };
  },

  methods: {
    newlead() {
      window.location.href = "newlead";
    },

    // names() {
    //    var lista_leads = JSON.parse(localStorage.getItem("lista-leads") || "[]");
    //    console.log(lista_leads)
    //    this.newLead += lista_leads
    //    console.log(lista_leads[0].nome)
    //    console.log(this.leads)

    // }

    handleDragStart(lane, dragResult) {
      const { payload, isSource } = dragResult;
      //console.log(isSource)
      if (isSource) {
        this.draggingLead = {
          lane: lane,
          index: payload.index,
          leadData: {
            ...this.leads[lane][payload.index],
          },
        };
      }
      console.log(this.leads[lane]);
    },
    handleDrop(lane, dropResult) {
      const { removedIndex, addedIndex } = dropResult;
      console.log(lane, removedIndex, addedIndex);

      if (lane === this.draggingLead.lane && removedIndex === addedIndex) {
        return;
      }

      if (removedIndex !== null) {
        this.leads[lane].splice(removedIndex, 1);
      }

      if (addedIndex !== null) {
        this.leads[lane].splice(addedIndex, 0, this.draggingLead.leadData);
      }
    },

    getChildPayLoad(index) {
      return {
        index,
      };
    },
    back() {
      window.location.href  = '/'
    }
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
}
.conteudo {
    width: 100%;
    max-width: 500px;
}
.button {
  display: flex;
  margin-bottom: 10px;
  width: 100%;
}
.button h2 {
  font-size: 20px;
  font-weight: normal;
}
.board {
  display: flex;
  justify-content: flex-start;
  margin: 12px 8px;
  margin: 0 8px;
}
.lane {
  width: 230px;
  height: 300px;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(33, 33, 33, 0.1);
  margin: 0 8px;
  padding: 0 7px;
  justify-content: center;
}
.lane-title {
  padding: 8px 5px;
  margin-bottom: 6px;
  font-size: 20px;
}
.placeholder {
  background: rgba(33, 33, 33, 0.08);
  border-radius: 4px;
  transform: scaleY(0.85);
  transform-origin: 0% 0%;
}
</style>
