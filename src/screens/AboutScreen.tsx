import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';

export default function AboutScreen() {
    const appName = 'Controle';
    const theme = 'Gerenciamento financeiro simples e intuitivo';
    const description = 'Este aplicativo ajuda a controlar contas a pagar e a receber, registrar entidades e acompanhar seu fluxo de caixa de forma prática.';
    const contact = 'contato@exemplo.com';

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://clickpetroleoegas.com.br/wp-content/uploads/2024/08/qual-desses-jogadores-possui-a-maior-fortuna.jpg' }}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.title}>{appName}</Text>
                <Text style={styles.subtitle}>{theme}</Text>

                <Text style={styles.sectionTitle}>Sobre</Text>
                <Text style={styles.paragraph}>Este aplicativo foi desenvolvido para facilitar o controle financeiro do seu dia a dia, permitindo gerenciar contas a pagar e a receber de maneira organizada e eficiente. Com ele, você pode registrar todas as suas transações, cadastrar entidades como clientes e fornecedores, e manter um acompanhamento detalhado do seu fluxo de caixa.

A interface é prática e intuitiva, tornando mais simples visualizar suas entradas e saídas, evitar atrasos em pagamentos e tomar decisões financeiras com mais segurança. Ideal tanto para uso pessoal quanto para pequenos negócios, o aplicativo ajuda você a ter mais controle, clareza e planejamento sobre suas finanças.</Text>

                <Text style={styles.sectionTitle}>Tema</Text>
                <Text style={styles.paragraph}>O aplicativo apresenta um design limpo e moderno, com uso de cores neutras que proporcionam uma experiência visual agradável e sem distrações. Cada elemento da interface foi pensado para transmitir clareza e organização, facilitando a navegação mesmo para quem não tem familiaridade com sistemas financeiros.

A usabilidade é um dos principais focos, garantindo que todas as funcionalidades sejam acessíveis de forma simples e intuitiva. Priorizamos listas bem estruturadas e legíveis, permitindo que o usuário visualize rapidamente suas informações mais importantes, como contas pendentes, recebimentos e movimentações recentes.

Além disso, o aplicativo foi projetado para oferecer ações rápidas e eficientes na entrada de dados, reduzindo o tempo gasto em cadastros e atualizações. Com poucos toques, é possível registrar transações, atualizar informações e manter o controle financeiro sempre em dia, sem complicações.</Text>

                <Text style={styles.sectionTitle}>Contato</Text>
                <Text style={styles.link}>neymar@gmail.com</Text>
                </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#f7f7f7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: '100%',
        maxWidth: 680,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
    },
    title: {
    fontSize: 28,
        fontWeight: '700',
        color: '#222',
        marginBottom: 4,
    },
    subtitle: {
    fontSize: 16,
        color: '#666',
        marginBottom: 12,
    },
    sectionTitle: {
    fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginTop: 12,
    },
    paragraph: {
    fontSize: 16,
        color: '#444',
        lineHeight: 20,
        marginTop: 6,
    },
    link: {
    color: '#1e90ff',
    fontSize: 16,
        marginTop: 6,
    },
    logo: {
        width: '100%',
        height: undefined,
        aspectRatio: 16 / 9,
        alignSelf: 'center',
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor: '#eee',
    },
    footer: {
        textAlign: 'right',
        color: '#999',
        marginTop: 12,
        fontSize: 14,
    },
});