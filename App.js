import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import * as Font from "expo-font";
import { Oswald_300Light } from "@expo-google-fonts/oswald";

const Habitos = ({ titulo, descricao, imagem, fontLoaded, onPress, showDescription }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 15, marginVertical: 10, backgroundColor: '#fff', borderRadius: 10, elevation: 3 }}>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>

        <Image source={{ uri: imagem }} style={{ width: 40, height: 40, marginRight: 10 }} />

        <Text style={[{ fontSize: 18, fontWeight: 'bold', color: "#8B4513", letterSpacing: 1, flex: 1 }, fontLoaded && { fontFamily: 'Oswald_300Light' }]}>

          {titulo}

        </Text>

      </View>

      {showDescription && <Text style={{ fontSize: 14, color: '#333', textAlign: 'left', marginTop: 5 }}>
        {descricao}
        
        </Text>}
    </TouchableOpacity>
  );
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fontsLoaded: false, 
      activeCard: null, 
      showHabits: false 
    };
  }

  async componentDidMount() {
    await Font.loadAsync({ Oswald_300Light });
    this.setState({ fontsLoaded: true });
  }

  toggleDescription = (index) => {
    this.setState((prevState) => ({
      activeCard: prevState.activeCard === index ? null : index 
    }));
  };

  toggleHabits = () => {
    this.setState((prevState) => ({
      showHabits: !prevState.showHabits
    }));
  };

  render() {
    const { activeCard, showHabits } = this.state;
    const habitosLista = [
      {
        titulo: "Ler um livro",
        descricao: "Ler diariamente é uma prática transformadora que expande conhecimentos, estimula a criatividade e reduz significativamente os níveis de estresse. Dedique pelo menos 20 minutos por dia a um livro do seu interesse, criando uma rotina que enriquecerá seu vocabulário e ampliará sua visão de mundo de maneira profunda e duradoura.",
        imagem: "https://cdn-icons-png.flaticon.com/512/3389/3389081.png"
      },
      {
        titulo: "Organizar o espaço para o dia seguinte",
        descricao: "Organizar seu ambiente de trabalho e pessoal na noite anterior é crucial para começar o dia com produtividade e tranquilidade. Separe suas roupas, prepare seus materiais e planeje suas tarefas essenciais, criando um ritual noturno que elimina o caos matinal e promove uma sensação de controle sobre sua rotina diária.",
        imagem: "https://cdn-icons-png.flaticon.com/512/2400/2400629.png"
      },
      {
        titulo: "Beber 2 litros de água",
        descricao: "Manter-se hidratado é fundamental para o bom funcionamento de todos os sistemas do corpo humano, incluindo digestão, circulação e regulação térmica. Adote o hábito de carregar uma garrafa de água reutilizável e estabeleça metas realistas de consumo ao longo do dia, observando melhorias na pele, energia e disposição física.",
        imagem: "https://cdn-icons-png.flaticon.com/512/2447/2447764.png"
      },
      {
        titulo: "Praticar exercícios",
        descricao: "A prática regular de atividade física, mesmo que em sessões curtas de 30 minutos diários, traz benefícios comprovados para a saúde cardiovascular, força muscular e bem-estar mental. Encontre uma modalidade que você genuinamente disfrute, seja caminhada, dança ou treino funcional, transformando o exercício num prazer e não numa obrigação.",
        imagem: "https://cdn-icons-png.flaticon.com/512/2936/2936886.png"
      },
      {
        titulo: "Praticar a gratidão",
        descricao: "Cultivar a gratidão através de um diário ou reflexão diária é uma poderosa ferramenta para desenvolver resiliência emocional e satisfação com a vida. Reserve cinco minutos ao acordar ou antes de dormir para enumerar três coisas positivas do seu dia, treinando sua mente para focar nas soluções e nas pequenas alegrias cotidianas.",
        imagem: "https://cdn-icons-png.flaticon.com/512/12649/12649647.png"
      }
    ];

    return (
      <View style={{ backgroundColor: '#f9d9ac', flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>

          <Text style={{ color: "#8B4513", fontSize: 25, margin: 10 }}>

            Bergamota

          </Text>

          <TouchableOpacity
            style={{ alignItems: "center", backgroundColor: '#fab87f', padding: 10, borderRadius: 70, margin: 20, marginBottom: 8 }}
            onPress={this.toggleHabits}>

            <Image
              source={{ uri: "https://cdn.pixabay.com/photo/2024/08/16/03/50/ai-generated-8972600_1280.png" }}
              style={{ width: 300, height: 300 }} />

            <Text
              style={{
                fontFamily: this.state.fontsLoaded ? "Oswald_300Light" : "System",
                fontSize: 20, 
                margin: 10, 
                fontWeight: 'bold', 
                color: "#8B4513"
              }}>
                
              Hábitos saudáveis para incluir na rotina
            </Text>
          </TouchableOpacity>

          {showHabits && (
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
              {habitosLista.map((habit, index) => (
                <Habitos
                  key={index}
                  titulo={habit.titulo}
                  descricao={habit.descricao}
                  imagem={habit.imagem}
                  fontLoaded={this.state.fontsLoaded}
                  onPress={() => this.toggleDescription(index)}
                  showDescription={activeCard === index}
                />
              ))}
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}
