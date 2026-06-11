const PLAYER_RATING_PROFILES = {
  "adairton": { figueira: 90, career: 82, confidence: "alta", reason: "Ídolo histórico com 234 partidas pelo clube.", sources: ["https://causaoperaria.org.br/2023/os-melhores-jogadores-da-historia-do-figueirense/"] },
  "albeneir": { figueira: 90, career: 83, confidence: "alta", reason: "Terceiro maior artilheiro do clube: 93 gols em 221 jogos.", sources: ["https://www.nsctotal.com.br/noticias/relembre-a-trajetoria-de-albeneir-3o-maior-artilheiro-da-historia-do-figueirense", "https://museudofutebol.org.br/crfb/instituicoes/475124/"] },
  "aldrovani": { figueira: 88, career: 78, confidence: "media", reason: "Atacante marcante do ciclo campeão entre 1999 e 2001.", sources: ["https://museudofutebol.org.br/crfb/instituicoes/475124/"] },
  "andre santos": { figueira: 81, career: 86, confidence: "media", reason: "Boa passagem no clube e carreira de nível internacional.", sources: ["https://museudofutebol.org.br/crfb/instituicoes/475124/", "https://www.transfermarkt.com.br/andre-santos/profil/spieler/54275"] },
  "balduino": { figueira: 88, career: 82, confidence: "media", reason: "Referência técnica das equipes alvinegras do fim dos anos 1970 e início dos 1980.", sources: ["https://museudofutebol.org.br/crfb/instituicoes/475124/", "https://futebol80.com.br/links/times/figueirense/figueirenseft.htm"] },
  "calico": { figueira: 92, career: 84, confidence: "alta", reason: "94 gols em 181 jogos e recordista de títulos pelo clube.", sources: ["https://museudofutebol.org.br/crfb/instituicoes/475124/"] },
  "casagrande": { figueira: 91, career: 81, confidence: "alta", reason: "430 partidas e liderança na era dos títulos estaduais dos anos 1970.", sources: ["https://figueirense.com.br/institucional/historia/", "https://ndmais.com.br/futebol/os-11-maiores-jogadores-do-figueirense-em-seus-98-anos-de-historia/"] },
  "chicao": { figueira: 86, career: 88, confidence: "media", reason: "Zagueiro de destaque no Figueirense e campeão nacional em alto nível.", sources: ["https://museudofutebol.org.br/crfb/instituicoes/475124/"] },
  "clebao": { figueira: 88, career: 80, confidence: "media", reason: "Zagueiro reconhecido entre os grandes ídolos defensivos do clube.", sources: ["https://ndmais.com.br/futebol/os-11-maiores-jogadores-do-figueirense-em-seus-98-anos-de-historia/"] },
  "cleber": { figueira: 88, career: 80, confidence: "media", reason: "Clebão foi um dos zagueiros de maior identificação no ciclo vitorioso dos anos 2000.", sources: ["https://ndmais.com.br/futebol/os-11-maiores-jogadores-do-figueirense-em-seus-98-anos-de-historia/"] },
  "cleiton xavier": { figueira: 82, career: 87, confidence: "media", reason: "Destaque técnico no clube e auge posterior em competições nacionais e internacionais.", sources: ["https://www.transfermarkt.com.br/cleiton-xavier/profil/spieler/27378"] },
  "edmundo": { figueira: 78, career: 96, confidence: "alta", reason: "Passagem curta, porém produtiva; carreira entre os grandes atacantes brasileiros de sua geração.", sources: ["https://museudofutebol.org.br/crfb/instituicoes/475124/"] },
  "edson bastos": { figueira: 89, career: 82, confidence: "media", reason: "Goleiro de grande identificação e muito votado em seleções históricas do clube.", sources: ["https://esporte.uol.com.br/enquetes/2017/05/11/escale-o-time-dos-sonhos-do-figueirense.htm"] },
  "evair": { figueira: 72, career: 93, confidence: "media", reason: "Passagem breve no fim da carreira e auge nacional muito elevado.", sources: ["https://museudofutebol.org.br/crfb/instituicoes/475124/"] },
  "fernandes": { figueira: 94, career: 87, confidence: "alta", reason: "Maior artilheiro: 108 gols; 403 jogos, seis estaduais e protagonismo em acessos e Copa do Brasil.", sources: ["https://ge.globo.com/sc/futebol/times/figueirense/noticia/2025/01/25/fernandes-relembra-classicos-inesqueciveis-com-a-camisa-do-figueirense.ghtml", "https://figueirense.com.br/institucional/historia/"] },
  "filipe luis": { figueira: 72, career: 94, confidence: "alta", reason: "Passagem inicial curta; auge posterior entre os melhores laterais brasileiros.", sources: ["https://museudofutebol.org.br/crfb/instituicoes/475124/", "https://fminside.net/players/1-fm-21/319221-filipe-luis"] },
  "genilson": { figueira: 90, career: 79, confidence: "alta", reason: "53 gols em 104 jogos e protagonismo no título catarinense de 1999.", sources: ["https://ge.globo.com/sc/futebol/times/figueirense/noticia/2025/06/12/figueirense-104-anos-genilson-relembra-passagem-no-clube-mais-importante-da-carreira.ghtml"] },
  "michel bastos": { figueira: 75, career: 89, confidence: "media", reason: "Passagem curta antes de atingir nível de seleção brasileira e futebol europeu.", sources: ["https://museudofutebol.org.br/crfb/instituicoes/475124/"] },
  "pecanha": { figueira: 92, career: 79, confidence: "alta", reason: "304 jogos e referência histórica entre os goleiros alvinegros.", sources: ["https://ndmais.com.br/futebol/memoria-pecanha-e-wilson-dois-goleiros-historicos-do-figueirense/", "https://figueirense.com.br/institucional/historia/"] },
  "pinga": { figueira: 93, career: 82, confidence: "alta", reason: "Recordista com 483 partidas e lateral emblemático da história do clube.", sources: ["https://causaoperaria.org.br/2023/os-melhores-jogadores-da-historia-do-figueirense/", "https://www.clicrbs.com.br/especial/sc/dsm/19%2C0%2C2679488%2CFernandes-completa-300-jogos-pelo-Figueirense-em-otima-fase.html"] },
  "roberto firmino": { figueira: 75, career: 95, confidence: "alta", reason: "Formado e revelado pelo clube; auge posterior como atacante de elite mundial.", sources: ["https://museudofutebol.org.br/crfb/instituicoes/475124/", "https://fminside.net/players/1-fm-21/19068857-roberto-firmino"] },
  "firmino": { figueira: 75, career: 95, confidence: "alta", reason: "Formado e revelado pelo clube; auge posterior como atacante de elite mundial.", sources: ["https://museudofutebol.org.br/crfb/instituicoes/475124/", "https://fminside.net/players/1-fm-21/19068857-roberto-firmino"] },
  "valdo": { figueira: 72, career: 92, confidence: "media", reason: "Passagem curta no início da carreira e auge posterior em seleção e futebol europeu.", sources: ["https://museudofutebol.org.br/crfb/instituicoes/475124/"] },
  "wilson": { figueira: 89, career: 84, confidence: "alta", reason: "Mais de 300 jogos e um dos goleiros de maior identificação com o clube.", sources: ["https://ndmais.com.br/futebol/memoria-pecanha-e-wilson-dois-goleiros-historicos-do-figueirense/", "https://esporte.uol.com.br/enquetes/2017/05/11/escale-o-time-dos-sonhos-do-figueirense.htm"] }
};

const PLAYER_RATING_POSITION_RULES = {
  "adairton": ["Defensor"],
  "albeneir": ["Atacante"],
  "aldrovani": ["Atacante"],
  "andre santos": ["Defensor"],
  "balduino": ["Meia", "Atacante"],
  "calico": ["Atacante"],
  "casagrande": ["Defensor"],
  "chicao": ["Defensor"],
  "clebao": ["Defensor"],
  "cleber": ["Defensor"],
  "cleiton xavier": ["Meia"],
  "edmundo": ["Atacante"],
  "edson bastos": ["Goleiro"],
  "evair": ["Atacante"],
  "fernandes": ["Meia", "Atacante"],
  "filipe luis": ["Defensor"],
  // A fonte-base antiga cadastrou o artilheiro Genílson como defensor.
  "genilson": ["Defensor"],
  "michel bastos": ["Defensor", "Meia"],
  "pecanha": ["Goleiro"],
  "pinga": ["Defensor", "Meia"],
  "roberto firmino": ["Atacante"],
  "firmino": ["Atacante"],
  "valdo": ["Meia"],
  "wilson": ["Goleiro"]
};

const PLAYER_RATING_SEASON_RULES = {
  "andre santos": [2002, 2003, 2004, 2007],
  "genilson": [1998, 1999, 2001],
  "wilson": [2007, 2008, 2009, 2010, 2011, 2012, 2022, 2023]
};

// Nota-base da força e relevância da temporada do Figueirense.
// A escala considera títulos, acessos e desempenho nacional, sem transformar
// automaticamente todo integrante do elenco em destaque individual.
const FIGUEIRA_SEASON_CONTEXT = {
  1970: 66,
  1971: 67,
  1972: 69,
  1973: 68,
  1974: 70,
  1975: 68,
  1976: 67,
  1977: 68,
  1978: 69,
  1979: 68,
  1980: 67,
  1981: 68,
  1982: 68,
  1983: 70,
  1984: 68,
  1985: 72,
  1986: 69,
  1987: 65,
  1988: 66,
  1989: 67,
  1990: 69,
  1991: 67,
  1992: 67,
  1993: 69,
  1994: 69,
  1995: 68,
  1996: 68,
  1997: 67,
  1998: 68,
  1999: 71,
  2000: 69,
  2001: 73,
  2002: 71,
  2003: 71,
  2004: 73,
  2005: 71,
  2006: 72,
  2007: 74,
  2008: 70,
  2009: 70,
  2010: 73,
  2011: 74,
  2012: 65,
  2013: 70,
  2014: 71,
  2015: 71,
  2016: 65,
  2017: 67,
  2018: 69,
  2019: 66,
  2020: 64,
  2021: 67,
  2022: 68,
  2023: 65,
  2024: 65,
  2025: 66,
  2026: 65
};

const PLAYER_SEASON_RATINGS = {
  "cicero|2006": {
    value: 83,
    confidence: "alta",
    reason: "Fez 13 gols no Brasileirão e integrou o trio ofensivo responsável por 40 gols na campanha de 7º lugar.",
    sources: ["https://ge.globo.com/ESP/Noticia/Arquivo/0,,AA1359436-4276,00.html"]
  },
  "schwenck|2006": {
    value: 83,
    confidence: "alta",
    reason: "Artilheiro do Figueirense no Brasileirão de 2006, com 14 gols.",
    sources: ["https://ge.globo.com/ESP/Noticia/Arquivo/0,,AA1359436-4276,00.html"]
  },
  "soares|2006": {
    value: 82,
    confidence: "alta",
    reason: "Marcou 13 gols no Brasileirão e foi protagonista da campanha de 7º lugar.",
    sources: ["https://ge.globo.com/ESP/Noticia/Arquivo/0,,AA1359436-4276,00.html"]
  },
  "wilson|2007": {
    value: 82,
    confidence: "alta",
    reason: "Goleiro titular do Figueirense vice-campeão da Copa do Brasil.",
    sources: ["https://ge.globo.com/sportv/jogos-historicos/jogo/06-06-2007/figueirense-fluminense.ghtml"]
  },
  "chicao|2007": {
    value: 82,
    confidence: "alta",
    reason: "Titular da defesa e um dos destaques da campanha até a final da Copa do Brasil.",
    sources: ["https://ge.globo.com/sportv/jogos-historicos/jogo/06-06-2007/figueirense-fluminense.ghtml"]
  },
  "cleiton xavier|2007": {
    value: 82,
    confidence: "alta",
    reason: "Principal articulador da equipe finalista da Copa do Brasil de 2007.",
    sources: ["https://ndmais.com.br/futebol/memoria-6-de-junho-de-2007-figueirense-na-final-da-copa-do-brasil/"]
  },
  "andre santos|2007": {
    value: 81,
    confidence: "alta",
    reason: "Titular pela esquerda na campanha que levou o Figueirense à final da Copa do Brasil.",
    sources: ["https://ndmais.com.br/futebol/memoria-6-de-junho-de-2007-figueirense-na-final-da-copa-do-brasil/"]
  },
  "felipe santana|2007": {
    value: 80,
    confidence: "alta",
    reason: "Zagueiro titular na campanha de vice-campeonato da Copa do Brasil.",
    sources: ["https://ge.globo.com/sportv/jogos-historicos/jogo/06-06-2007/figueirense-fluminense.ghtml"]
  },
  "victor simoes|2007": {
    value: 80,
    confidence: "media",
    reason: "Referência ofensiva da equipe finalista da Copa do Brasil.",
    sources: ["https://ge.globo.com/sportv/jogos-historicos/jogo/06-06-2007/figueirense-fluminense.ghtml"]
  },
  "rafael coelho|2009": {
    value: 82,
    confidence: "alta",
    reason: "Artilheiro da Série B de 2009 pelo Figueirense, com 17 gols.",
    sources: ["https://ge.globo.com/sc/futebol/times/figueirense/noticia/filipe-luis-firmino-veja-selecao-do-figueirense-no-seculo-xxi-com-jogadores-revelados-no-clube.ghtml"]
  },
  "willian bigode|2010": {
    value: 81,
    confidence: "alta",
    reason: "Artilheiro do Figueirense na Série B de 2010, com 12 gols, na campanha do acesso.",
    sources: ["https://www.transfermarkt.com/figueirense-futebol-clube/toptorschuetzensaison/verein/4064"]
  },
  "wilson|2010": {
    value: 81,
    confidence: "alta",
    reason: "Disputou o posto de melhor goleiro da Série B e liderou o time vice-campeão.",
    sources: ["https://www.futebolinterior.com.br/relembre-a-selecao-final-da-serie-b-de-2010-feita-pelos-jornalistas/"]
  },
  "lucas|2010": {
    value: 79,
    confidence: "alta",
    reason: "Lateral mais votado entre os melhores da Série B de 2010 e titular no acesso.",
    sources: ["https://www.futebolinterior.com.br/relembre-a-selecao-final-da-serie-b-de-2010-feita-pelos-jornalistas/"]
  },
  "roberto firmino|2010": {
    value: 79,
    confidence: "alta",
    reason: "Marcou oito gols na Série B e foi peça importante na campanha do acesso.",
    sources: ["https://www.espn.com.br/futebol/estatisticas/_/liga/BRA.2/temporada/2010"]
  },
  "aloisio|2012": {
    value: 80,
    confidence: "alta",
    reason: "Marcou 14 gols no Brasileirão mesmo durante uma temporada coletiva muito ruim.",
    sources: ["https://www.transfermarkt.com/figueirense-futebol-clube/toptorschuetzensaison/verein/4064"]
  },
  "fernandes|2012": {
    value: 72,
    confidence: "media",
    reason: "Ídolo histórico já em fase final de passagem, numa temporada de rebaixamento e baixo rendimento coletivo.",
    sources: ["https://figueirense.com.br/institucional/historia/"]
  },
  "wilson|2012": {
    value: 75,
    confidence: "media",
    reason: "Manteve importância e liderança, mas inserido em uma das piores campanhas nacionais do clube.",
    sources: ["https://figueirense.com.br/institucional/historia/"]
  },
  "rafael costa|2013": {
    value: 81,
    confidence: "alta",
    reason: "Artilheiro do acesso à Série A, com 14 gols na Série B de 2013.",
    sources: ["https://www.transfermarkt.com/figueirense-futebol-clube/toptorschuetzensaison/verein/4064"]
  },
  "everaldo|2014": {
    value: 79,
    confidence: "alta",
    reason: "Artilheiro do Figueirense na Série A de 2014 e campeão catarinense.",
    sources: ["https://www.transfermarkt.com/figueirense-futebol-clube/toptorschuetzensaison/verein/4064"]
  },
  "clayton|2014": {
    value: 78,
    confidence: "media",
    reason: "Jovem destaque do time campeão catarinense e presença crescente na equipe principal.",
    sources: ["https://ge.globo.com/sc/futebol/times/figueirense/noticia/filipe-luis-firmino-veja-selecao-do-figueirense-no-seculo-xxi-com-jogadores-revelados-no-clube.ghtml"]
  },
  "clayton|2015": {
    value: 81,
    confidence: "alta",
    reason: "Artilheiro do clube na Série A e protagonista do bicampeonato catarinense.",
    sources: ["https://ge.globo.com/sc/futebol/times/figueirense/noticia/filipe-luis-firmino-veja-selecao-do-figueirense-no-seculo-xxi-com-jogadores-revelados-no-clube.ghtml"]
  },
  "rafael moura|2016": {
    value: 79,
    confidence: "alta",
    reason: "Principal artilheiro do Figueirense na Série A de 2016, apesar do rebaixamento.",
    sources: ["https://www.transfermarkt.com/figueirense-futebol-clube/toptorschuetzensaison/verein/4064"]
  },
  "henan|2017": {
    value: 77,
    confidence: "alta",
    reason: "Artilheiro do clube na Série B de 2017, com 12 gols.",
    sources: ["https://www.transfermarkt.com/figueirense-futebol-clube/toptorschuetzensaison/verein/4064"]
  },
  "elton|2018": {
    value: 79,
    confidence: "alta",
    reason: "Artilheiro do Figueirense na Série B de 2018, com dez gols, e integrante do elenco campeão estadual.",
    sources: ["https://www.transfermarkt.com/figueirense-futebol-clube/toptorschuetzensaison/verein/4064"]
  },
  "wellington nem|2011": {
    value: 85,
    confidence: "alta",
    reason: "Protagonista da melhor campanha do clube na Série A e eleito a revelação do Brasileirão de 2011.",
    sources: ["https://globoesporte.globo.com/futebol/brasileirao-serie-a/noticia/2011/12/craque-do-brasileirao-2011-wellington-nem-e-revelacao.html"]
  },
  "fernandes|2011": {
    value: 76,
    confidence: "media",
    reason: "Ídolo do clube, mas sem o mesmo protagonismo individual de seus anos de auge na campanha de 2011.",
    sources: ["https://ge.globo.com/sc/futebol/times/figueirense/noticia/centenario-do-figueirense-veja-100-imagens-da-historia-do-clube.ghtml"]
  },
  "julio cesar|2011": {
    value: 83,
    confidence: "alta",
    reason: "Artilheiro do Figueirense na temporada de 2011, com 24 gols no ano.",
    sources: ["https://futebol80.com.br/links/times/figueirense/figueirenseart.htm"]
  },
  "wilson|2011": {
    value: 82,
    confidence: "alta",
    reason: "Capitão e referência defensiva na melhor campanha alvinegra da Série A.",
    sources: ["https://ge.globo.com/sc/futebol/times/figueirense/noticia/centenario-do-figueirense-veja-100-imagens-da-historia-do-clube.ghtml"]
  },
  "tulio guerreiro|2011": {
    value: 80,
    confidence: "alta",
    reason: "Titular e liderança do meio-campo na campanha de 7º lugar do Brasileirão.",
    sources: ["https://www.transfermarkt.com/sao-paulo-futebol-clube_figueirense-futebol-clube/index/spielbericht/1093644"]
  },
  "ygor|2011": {
    value: 79,
    confidence: "media",
    reason: "Peça frequente do meio-campo na campanha histórica da Série A de 2011.",
    sources: ["https://www.transfermarkt.com/sao-paulo-futebol-clube_figueirense-futebol-clube/index/spielbericht/1093644"]
  },
  "maicon|2011": {
    value: 79,
    confidence: "media",
    reason: "Meia titular de uma das equipes mais competitivas da história do clube.",
    sources: ["https://www.transfermarkt.com/sao-paulo-futebol-clube_figueirense-futebol-clube/index/spielbericht/1093644"]
  },
  "edson silva|2011": {
    value: 79,
    confidence: "media",
    reason: "Titular da defesa na campanha de 7º lugar do Campeonato Brasileiro.",
    sources: ["https://www.transfermarkt.com/sao-paulo-futebol-clube_figueirense-futebol-clube/index/spielbericht/1093644"]
  },
  "bruno|2011": {
    value: 78,
    confidence: "media",
    reason: "Lateral titular na campanha histórica do Brasileirão de 2011.",
    sources: ["https://www.transfermarkt.com/sao-paulo-futebol-clube_figueirense-futebol-clube/index/spielbericht/1093644"]
  },
  "joao paulo|2011": {
    value: 78,
    confidence: "media",
    reason: "Defensor titular na melhor campanha do clube na Série A.",
    sources: ["https://www.transfermarkt.com/sao-paulo-futebol-clube_figueirense-futebol-clube/index/spielbericht/1093644"]
  },
  "aloisio|2011": {
    value: 78,
    confidence: "media",
    reason: "Atacante importante na rotação ofensiva do forte elenco de 2011.",
    sources: ["https://www.transfermarkt.com/sao-paulo-futebol-clube_figueirense-futebol-clube/index/spielbericht/1093644"]
  },
  "sergio manoel|2004": {
    value: 81,
    confidence: "alta",
    reason: "Referência técnica, campeão catarinense e parceiro de Fernandes na forte equipe de 2004.",
    sources: ["https://figueirense.com.br/institucional/historia/"]
  },
  "fernandes|2004": {
    value: 84,
    confidence: "alta",
    reason: "Protagonista técnico do título catarinense e da boa campanha nacional de 2004.",
    sources: ["https://figueirense.com.br/institucional/historia/"]
  }
};
