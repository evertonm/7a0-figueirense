const FORMATION_LINES = {
  "4-3-3": [
    { group: "Defensor", row: 9, count: 4 },
    { group: "Meia", row: 6, count: 3 },
    { group: "Atacante", row: 2, count: 3 }
  ],
  "4-4-2": [
    { group: "Defensor", row: 9, count: 4 },
    { group: "Meia", row: 6, count: 4 },
    { group: "Atacante", row: 2, count: 2 }
  ],
  "4-2-3-1": [
    { group: "Defensor", row: 9, count: 4 },
    { group: "Meia", row: 7, count: 2 },
    { group: "Meia", row: 4, count: 3 },
    { group: "Atacante", row: 1, count: 1 }
  ],
  "4-2-4": [
    { group: "Defensor", row: 9, count: 4 },
    { group: "Meia", row: 6, count: 2 },
    { group: "Atacante", row: 2, count: 4 }
  ],
  "3-5-2": [
    { group: "Defensor", row: 9, count: 3 },
    { group: "Meia", row: 6, count: 5 },
    { group: "Atacante", row: 2, count: 2 }
  ],
  "5-3-2": [
    { group: "Defensor", row: 9, count: 5 },
    { group: "Meia", row: 6, count: 3 },
    { group: "Atacante", row: 2, count: 2 }
  ],
  "4-5-1": [
    { group: "Defensor", row: 9, count: 4 },
    { group: "Meia", row: 6, count: 5 },
    { group: "Atacante", row: 2, count: 1 }
  ],
  "3-4-3": [
    { group: "Defensor", row: 9, count: 3 },
    { group: "Meia", row: 6, count: 4 },
    { group: "Atacante", row: 2, count: 3 }
  ]
};

const FORMATION_ROLES = {
  "4-3-3": {
    defensivo: ["LD", "ZAG", "ZAG", "LE", "VOL", "VOL", "MC", "PD", "CA", "PE"],
    equilibrado: ["LD", "ZAG", "ZAG", "LE", "VOL", "MC", "MEI", "PD", "CA", "PE"],
    ofensivo: ["LD", "ZAG", "ZAG", "LE", "MC", "MC", "MEI", "PD", "CA", "PE"]
  },
  "4-4-2": {
    defensivo: ["LD", "ZAG", "ZAG", "LE", "MD", "VOL", "VOL", "ME", "CA", "CA"],
    equilibrado: ["LD", "ZAG", "ZAG", "LE", "MD", "VOL", "MC", "ME", "CA", "CA"],
    ofensivo: ["LD", "ZAG", "ZAG", "LE", "VOL", "MC", "MC", "MEI", "CA", "CA"]
  },
  "4-2-3-1": {
    defensivo: ["LD", "ZAG", "ZAG", "LE", "VOL", "VOL", "PE", "MEI", "PD", "CA"],
    equilibrado: ["LD", "ZAG", "ZAG", "LE", "VOL", "MC", "PE", "MEI", "PD", "CA"],
    ofensivo: ["LD", "ZAG", "ZAG", "LE", "MC", "MC", "PE", "MEI", "PD", "CA"]
  },
  "4-2-4": {
    defensivo: ["LD", "ZAG", "ZAG", "LE", "VOL", "VOL", "PE", "CA", "CA", "PD"],
    equilibrado: ["LD", "ZAG", "ZAG", "LE", "VOL", "MC", "PE", "CA", "CA", "PD"],
    ofensivo: ["LD", "ZAG", "ZAG", "LE", "MC", "MEI", "PE", "CA", "CA", "PD"]
  },
  "3-5-2": {
    defensivo: ["ZAG", "ZAG", "ZAG", "ME", "VOL", "VOL", "MC", "MD", "CA", "CA"],
    equilibrado: ["ZAG", "ZAG", "ZAG", "ME", "MC", "VOL", "MC", "MD", "CA", "CA"],
    ofensivo: ["ZAG", "ZAG", "ZAG", "PE", "MC", "MEI", "MC", "PD", "CA", "CA"]
  },
  "5-3-2": {
    defensivo: ["LE", "ZAG", "ZAG", "ZAG", "LD", "MC", "VOL", "VOL", "CA", "CA"],
    equilibrado: ["LE", "ZAG", "ZAG", "ZAG", "LD", "VOL", "MC", "MEI", "CA", "CA"],
    ofensivo: ["LE", "ZAG", "ZAG", "ZAG", "LD", "MC", "MC", "MEI", "CA", "CA"]
  },
  "4-5-1": {
    defensivo: ["LD", "ZAG", "ZAG", "LE", "MD", "VOL", "VOL", "MC", "ME", "CA"],
    equilibrado: ["LD", "ZAG", "ZAG", "LE", "MD", "MC", "VOL", "MEI", "ME", "CA"],
    ofensivo: ["LD", "ZAG", "ZAG", "LE", "MC", "VOL", "MC", "MEI", "MEI", "CA"]
  },
  "3-4-3": {
    defensivo: ["ZAG", "ZAG", "ZAG", "ME", "VOL", "MC", "MD", "PE", "CA", "PD"],
    equilibrado: ["ZAG", "ZAG", "ZAG", "ME", "MC", "MC", "MD", "PE", "CA", "PD"],
    ofensivo: ["ZAG", "ZAG", "ZAG", "ME", "MC", "MEI", "MD", "PE", "CA", "PD"]
  }
};

function createFormation(code, style) {
  const groups = ["Goleiro"];
  FORMATION_LINES[code].forEach(({ count, group }) => {
    groups.push(...Array(count).fill(group));
  });
  const roles = FORMATION_ROLES[code][style];
  const coordinates = FORMATION_LAYOUTS[code][style]
    .split(";")
    .map(pair => pair.split(",").map(Number));

  return coordinates.map(([x, y], index) => ({
    role: index === 0 ? "GOL" : roles[index - 1],
    group: groups[index],
    x,
    y
  }));
}

let FORMATION = createFormation("4-3-3", "equilibrado");

const TOURNAMENT_STAGES = [
  { short: "G1", label: "Grupo · Rodada 1", title: "FASE DE<br><em>GRUPOS.</em>", knockout: false },
  { short: "G2", label: "Grupo · Rodada 2", title: "FASE DE<br><em>GRUPOS.</em>", knockout: false },
  { short: "G3", label: "Grupo · Rodada 3", title: "FASE DE<br><em>GRUPOS.</em>", knockout: false },
  { short: "OIT", label: "Oitavas de final", title: "OITAVAS DE<br><em>FINAL.</em>", knockout: true },
  { short: "QF", label: "Quartas de final", title: "QUARTAS DE<br><em>FINAL.</em>", knockout: true },
  { short: "SF", label: "Semifinal", title: "SEMI<br><em>FINAL.</em>", knockout: true },
  { short: "FIN", label: "Final", title: "A GRANDE<br><em>FINAL.</em>", knockout: true }
];

const CONSERVATIVE_ROLE_DEFAULTS = {
  Goleiro: "GOL",
  Defensor: "ZAG",
  Meia: "MC",
  Atacante: "CA"
};

const state = {
  round: 0,
  seasons: [],
  lineup: Array(11).fill(null),
  usedNames: new Set(),
  matchIndex: 0,
  groupPoints: 0,
  matchResults: [],
  tournamentOver: false,
  opponentSeasons: new Set(),
  rerollsLeft: 2,
  rerolledSeasons: new Set(),
  formation: "4-3-3",
  style: "equilibrado",
  mode: "classico",
  pendingPlayer: null,
  viewingTeam: false,
  matchSpeed: 1,
  liveMinute: 0,
  matchTimer: null,
  penaltyTimer: null,
  currentMatch: null
};

const hero = document.querySelector(".hero");
const game = document.querySelector("#game");
const result = document.querySelector("#result");
const pitch = document.querySelector("#pitch");
const playerList = document.querySelector("#playerList");
const playerSearch = document.querySelector("#playerSearch");
const emptyState = document.querySelector("#emptyState");
const rollPanel = document.querySelector("#rollPanel");
const drawPanel = document.querySelector("#drawPanel");
const dice = document.querySelector("#dice");

function normalize(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function roleProfile(player) {
  const key = normalize(player.name);
  const researched = PLAYER_ROLE_PROFILES[`${key}|${player.season}`] ||
    PLAYER_ROLE_PROFILES[key] ||
    TRANSFERMARKT_ROLE_PROFILES[`${key}|${player.season}`];

  if (researched) {
    return { ...researched, researched: true };
  }

  return {
    primary: CONSERVATIVE_ROLE_DEFAULTS[player.position],
    secondary: [],
    confidence: "baixa",
    source: player.source,
    sourcePosition: `${player.position} (função específica ainda não confirmada)`,
    researched: false
  };
}

function playerRoles(player) {
  const profile = roleProfile(player);
  return [profile.primary, ...profile.secondary];
}

function compatibleSlotIndexes(player) {
  const roles = playerRoles(player);
  return FORMATION
    .map((slot, index) => ({ slot, index }))
    .filter(({ slot, index }) =>
      !state.lineup[index] &&
      roles.includes(slot.role)
    )
    .sort((a, b) => {
      // The first role is the researched primary position.
      return roles.indexOf(a.slot.role) - roles.indexOf(b.slot.role);
    })
    .map(({ index }) => index);
}

function hasCompatibleSlot(player) {
  return compatibleSlotIndexes(player).length > 0;
}

function contiguousSpellLength(player) {
  const seasons = new Set(FIGUEIRA_PLAYERS
    .filter(candidate =>
      normalize(candidate.name) === normalize(player.name) &&
      candidate.position === player.position
    )
    .map(candidate => candidate.season));
  let length = 1;
  for (let year = player.season - 1; seasons.has(year); year -= 1) length += 1;
  for (let year = player.season + 1; seasons.has(year); year += 1) length += 1;
  return length;
}

function editorialRating(player) {
  const nameKey = normalize(player.name);
  const seasonProfile = PLAYER_SEASON_RATINGS[`${nameKey}|${player.season}`];
  if (seasonProfile) {
    return {
      ...seasonProfile,
      method: "season-editorial"
    };
  }

  let profile = PLAYER_RATING_PROFILES[`${nameKey}|${player.season}`] ||
    PLAYER_RATING_PROFILES[nameKey];
  const allowedPositions = PLAYER_RATING_POSITION_RULES[nameKey];
  const allowedSeasons = PLAYER_RATING_SEASON_RULES[nameKey];
  if (
    (allowedPositions && !allowedPositions.includes(player.position)) ||
    (allowedSeasons && !allowedSeasons.includes(player.season))
  ) {
    profile = null;
  }

  if (profile) {
    const legacyValue = Math.min(90, profile.figueira * 0.75 + profile.career * 0.25);
    const seasonContext = FIGUEIRA_SEASON_CONTEXT[player.season] || 66;
    return {
      value: Math.min(90, Math.round(legacyValue * 0.72 + seasonContext * 0.28)),
      confidence: profile.confidence,
      reason: `${profile.reason} Nota ajustada ao contexto da temporada de ${player.season}.`,
      sources: profile.sources,
      method: "editorial"
    };
  }

  const spell = contiguousSpellLength(player);
  const seasonBase = FIGUEIRA_SEASON_CONTEXT[player.season] || 66;
  const continuityBonus = Math.min(4, Math.max(0, spell - 1) * 0.8);
  const sourceBonus = player.confidence === "alta" ? 2 : player.confidence === "media" ? 1 : 0;
  const lineupBonus = player.status === "escalacao_historica" ? 1 : 0;
  const value = Math.min(82, Math.round(
    seasonBase + continuityBonus + sourceBonus + lineupBonus
  ));
  return {
    value,
    confidence: FIGUEIRA_SEASON_CONTEXT[player.season] && player.confidence !== "baixa"
      ? "media"
      : "baixa",
    reason: FIGUEIRA_SEASON_CONTEXT[player.season]
      ? "Estimativa baseada na força da temporada do Figueirense, continuidade no clube e qualidade do registro."
      : "Estimativa conservadora baseada na continuidade da passagem e na qualidade do registro histórico.",
    sources: [player.source],
    method: "estimated"
  };
}

function randomEligibleSeason(previous) {
  const seasons = [...new Set(FIGUEIRA_PLAYERS.map(player => player.season))]
    .filter(season => season !== previous)
    .filter(season => FIGUEIRA_PLAYERS.some(player =>
      player.season === season &&
      hasCompatibleSlot(player) &&
      !state.usedNames.has(normalize(player.name))
    ));
  return seasons[Math.floor(Math.random() * seasons.length)];
}

function startGame() {
  stopMatchTimer();
  state.round = 0;
  state.lineup = Array(11).fill(null);
  state.usedNames = new Set();
  state.seasons = [];
  state.matchIndex = 0;
  state.groupPoints = 0;
  state.matchResults = [];
  state.tournamentOver = false;
  state.opponentSeasons = new Set();
  state.rerollsLeft = 2;
  state.rerolledSeasons = new Set();
  state.matchSpeed = 1;
  state.liveMinute = 0;
  state.currentMatch = null;
  state.pendingPlayer = null;
  state.viewingTeam = false;
  FORMATION = createFormation(state.formation, state.style);
  game.classList.remove("team-view");
  document.querySelector("#closeTeamView").classList.add("hidden");
  document.querySelector("#resetGame").classList.remove("hidden");
  document.querySelector("#gameSettings").classList.remove("locked");
  document.querySelector("#campaignCardWrap").classList.add("hidden");
  document.querySelector("#shareFeedback").classList.add("hidden");
  document.querySelector("#matchStar").classList.add("hidden");
  updateRerollButton();
  playerSearch.value = "";

  hero.classList.add("hidden");
  result.classList.add("hidden");
  game.classList.remove("hidden");
  renderPitch();
  renderRound();
  game.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderPitch() {
  pitch.innerHTML = `
    <div class="penalty-area top"><i></i><b></b></div>
    <div class="penalty-area bottom"><i></i><b></b></div>
    <span class="center-spot"></span>
  `;
  const compatibleIndexes = state.pendingPlayer
    ? new Set(compatibleSlotIndexes(state.pendingPlayer))
    : new Set();

  FORMATION.forEach((slot, index) => {
    const selected = state.lineup[index];
    const isTarget = !selected && compatibleIndexes.has(index);
    const element = document.createElement("button");
    element.type = "button";
    element.className = `slot ${selected ? "" : "empty"} ${isTarget ? "choice-target" : ""} ${state.pendingPlayer && !selected && !isTarget ? "blocked" : ""}`;
    element.style.left = `${slot.x}%`;
    element.style.top = `${slot.y}%`;
    element.disabled = !isTarget;
    element.setAttribute("aria-label", isTarget
      ? `Escalar ${state.pendingPlayer.name} como ${slot.role}`
      : `${slot.role}${selected ? `: ${selected.name}` : ": vaga aberta"}`);
    element.innerHTML = selected
      ? `<div class="slot-card">
          <span class="slot-role ${state.mode === "almanaque" ? "almanaque-role" : ""}">${slot.role}</span>
          ${state.mode === "almanaque" ? "" : `<strong class="slot-rating">${selected.rating}</strong>`}
        </div>
        <span class="slot-name">${selected.name}</span>
        <small class="slot-season">${selected.season}</small>`
      : `<div class="slot-card">
          <strong class="empty-role">${slot.role}</strong>
        </div>`;
    if (isTarget) {
      element.addEventListener("click", () => placePlayer(index));
    }
    pitch.appendChild(element);
  });
  document.querySelector("#progress").textContent = `${state.round}/11`;
  renderSquadDna();
}

function squadDna() {
  const players = state.lineup.filter(Boolean);
  const decades = new Set(players.map(player => Math.floor(player.season / 10) * 10));
  const researchedRoles = players.filter(player => roleProfile(player).researched).length;
  const editorialRatings = players.filter(player =>
    player.ratingData?.method === "season-editorial" || player.ratingData?.method === "editorial"
  ).length;
  const score = Math.min(100, Math.round(
    players.length * 3 +
    decades.size * 9 +
    researchedRoles * 1.5 +
    editorialRatings * 1.5
  ));
  const bonus = Math.min(1.5, Math.max(0, decades.size - 2) * 0.3);
  return { score, bonus, decades: decades.size };
}

function renderSquadDna() {
  const dna = squadDna();
  document.querySelector("#dnaFill").style.width = `${dna.score}%`;
  document.querySelector("#dnaLabel").textContent = !state.round
    ? "COMECE A ESCALAÇÃO"
    : dna.decades >= 6
      ? `${dna.decades} DÉCADAS · VIAJANTE DO TEMPO`
      : dna.decades >= 4
        ? `${dna.decades} DÉCADAS · PONTE DE GERAÇÕES`
        : `${dna.decades} DÉCADA${dna.decades === 1 ? "" : "S"} REPRESENTADA${dna.decades === 1 ? "" : "S"}`;
}

function currentCandidates() {
  const season = state.seasons[state.round];
  const query = normalize(playerSearch.value.trim());

  return FIGUEIRA_PLAYERS
    .filter(player =>
      player.season === season &&
      (!query || normalize(player.name).includes(query))
    )
    .map(player => {
      const ratingData = editorialRating(player);
      return {
        ...player,
        rating: ratingData.value,
        ratingData,
        selectable: !state.usedNames.has(normalize(player.name)) && hasCompatibleSlot(player)
      };
    })
    .sort((a, b) => {
      const order = { Goleiro: 0, Defensor: 1, Meia: 2, Atacante: 3 };
      return order[a.position] - order[b.position] ||
        Number(b.selectable) - Number(a.selectable) ||
        b.rating - a.rating ||
        a.name.localeCompare(b.name, "pt-BR");
    });
}

function renderRound() {
  if (state.round >= FORMATION.length) {
    finishGame();
    return;
  }

  rollPanel.classList.remove("hidden");
  drawPanel.classList.add("hidden");
  state.pendingPlayer = null;
  document.querySelector("#rollRound").textContent = state.round + 1;
  playerList.innerHTML = "";
}

function rollSeason() {
  const button = document.querySelector("#rollDice");
  button.disabled = true;
  dice.classList.remove("rolling");
  void dice.offsetWidth;
  dice.classList.add("rolling");

  window.setTimeout(() => {
    const previous = state.seasons[state.round - 1] || null;
    state.seasons[state.round] = randomEligibleSeason(previous);
    document.querySelector("#season").textContent = state.seasons[state.round];
    document.querySelector("#position").textContent = remainingPositionsLabel();
    state.pendingPlayer = null;
    rollPanel.classList.add("hidden");
    drawPanel.classList.remove("hidden");
    document.querySelector("#gameSettings").classList.add("locked");
    button.disabled = false;
    renderPlayers();
  }, 700);
}

function rerollSeason() {
  if (state.rerollsLeft <= 0 || drawPanel.classList.contains("hidden")) return;
  const currentSeason = state.seasons[state.round];
  state.rerolledSeasons.add(currentSeason);
  const eligible = [...new Set(FIGUEIRA_PLAYERS.map(player => player.season))]
    .filter(season => season !== currentSeason)
    .filter(season => !state.rerolledSeasons.has(season))
    .filter(season => FIGUEIRA_PLAYERS.some(player =>
      player.season === season &&
      hasCompatibleSlot(player) &&
      !state.usedNames.has(normalize(player.name))
    ));
  if (!eligible.length) return;

  state.rerollsLeft -= 1;
  state.seasons[state.round] = eligible[Math.floor(Math.random() * eligible.length)];
  state.pendingPlayer = null;
  playerSearch.value = "";
  document.querySelector("#season").textContent = state.seasons[state.round];
  document.querySelector("#position").textContent = remainingPositionsLabel();
  updateRerollButton();
  renderPitch();
  renderPlayers();
}

function updateRerollButton() {
  const button = document.querySelector("#rerollSeason");
  const label = document.querySelector("#rerollsLeft");
  button.disabled = state.rerollsLeft <= 0;
  label.textContent = `${state.rerollsLeft} CHANCE${state.rerollsLeft === 1 ? "" : "S"}`;
}

function capacityFor(group) {
  return FORMATION.filter(slot => slot.group === group).length;
}

function usedCapacity(group) {
  return state.lineup.filter((player, index) =>
    player && FORMATION[index].group === group
  ).length;
}

function hasCapacity(group) {
  return usedCapacity(group) < capacityFor(group);
}

function remainingPositionsLabel() {
  const short = {
    Goleiro: "GOL",
    Defensor: "DEF",
    Meia: "MEI",
    Atacante: "ATA"
  };
  return Object.keys(short)
    .filter(hasCapacity)
    .map(group => `${short[group]} ${capacityFor(group) - usedCapacity(group)}`)
    .join(" · ");
}

function renderPlayers() {
  const candidates = currentCandidates();
  playerList.innerHTML = "";
  emptyState.classList.toggle("hidden", candidates.length > 0);
  let lastPosition = null;

  candidates.forEach(player => {
    const profile = roleProfile(player);
    if (player.position !== lastPosition) {
      const divider = document.createElement("div");
      divider.className = "position-divider";
      const plurals = {
        Goleiro: "Goleiros",
        Defensor: "Defensores",
        Meia: "Meias",
        Atacante: "Atacantes"
      };
      const available = candidates.filter(candidate =>
        candidate.position === player.position && candidate.selectable
      ).length;
      divider.textContent = `${plurals[player.position]} · ${available} disponível(is)`;
      playerList.appendChild(divider);
      lastPosition = player.position;
    }

    const button = document.createElement("button");
    const isPending = state.pendingPlayer &&
      normalize(state.pendingPlayer.name) === normalize(player.name) &&
      state.pendingPlayer.season === player.season &&
      state.pendingPlayer.position === player.position;
    button.className = `player-option ${state.mode === "almanaque" ? "almanaque" : ""} ${player.selectable ? "" : "unavailable"} ${isPending ? "selected-player" : ""}`;
    button.disabled = !player.selectable;
    button.title = player.selectable
      ? `${profile.sourcePosition || profile.primary} · ${profile.researched ? "posição pesquisada" : "função provisória"}`
      : `Sem vaga compatível para ${profile.primary}${profile.secondary.length ? `, ${profile.secondary.join(", ")}` : ""} ou jogador já utilizado`;
    button.innerHTML = `
      ${state.mode === "almanaque" ? "" : `<span class="player-rating">${player.rating}</span>`}
      <span class="player-info">
        <strong>${player.name}</strong>
        <small>${profile.primary}${profile.secondary.length ? ` · ${profile.secondary.join(" · ")}` : ""} · ${profile.researched ? "posição confirmada" : "função provisória"} · ${player.season}${state.mode === "almanaque" ? "" : ` · nota ${player.ratingData.confidence}`}</small>
      </span>
      <span class="confidence ${profile.researched ? "" : "low"}"
        title="${profile.researched ? `Posição: ${profile.sourcePosition || profile.primary}` : "A fonte disponível informa apenas o setor; nenhuma posição lateral será presumida."}"></span>
    `;
    if (player.selectable) {
      button.addEventListener("click", () => selectPlayer(player));
    }
    playerList.appendChild(button);
  });
}

function selectPlayer(player) {
  if (!hasCompatibleSlot(player)) {
    renderPlayers();
    return;
  }

  const isSamePlayer = state.pendingPlayer &&
    normalize(state.pendingPlayer.name) === normalize(player.name) &&
    state.pendingPlayer.season === player.season &&
    state.pendingPlayer.position === player.position;
  state.pendingPlayer = isSamePlayer ? null : player;
  document.querySelector("#position").textContent = state.pendingPlayer
    ? `ESCOLHA A VAGA · ${compatibleSlotIndexes(player).map(index => FORMATION[index].role).join(" · ")}`
    : remainingPositionsLabel();
  renderPitch();
  renderPlayers();
}

function placePlayer(slotIndex) {
  const player = state.pendingPlayer;
  if (!player || !compatibleSlotIndexes(player).includes(slotIndex)) return;

  state.lineup[slotIndex] = player;
  state.usedNames.add(normalize(player.name));
  state.pendingPlayer = null;
  state.round += 1;
  playerSearch.value = "";
  renderPitch();
  renderRound();
}

function finishGame() {
  game.classList.add("hidden");
  result.classList.remove("hidden");
  simulateTournamentMatch();
}

function teamStrength() {
  const average = state.lineup.reduce((sum, player) => sum + player.rating, 0) / 11;
  const variance = state.lineup.reduce((sum, player) => sum + (player.rating - average) ** 2, 0) / 11;
  return average + Math.max(0, 3 - Math.sqrt(variance) / 3) + squadDna().bonus;
}

function simulateTournamentMatch() {
  stopMatchTimer();
  const stage = TOURNAMENT_STAGES[state.matchIndex];
  const strength = teamStrength();
  const opponent = buildOpponent();
  const difference = strength - opponent.strength;
  const styles = {
    defensivo: { home: -0.25, away: -0.8 },
    equilibrado: { home: 0, away: 0 },
    ofensivo: { home: 0.8, away: 0.55 }
  };
  const style = styles[state.style];
  const home = Math.max(0, Math.min(7, Math.round(2.1 + difference / 7 + style.home + Math.random() * 2)));
  const away = Math.max(0, Math.min(7, Math.round(2.1 - difference / 7 + style.away + Math.random() * 2)));
  const homeEvents = generateGoalEvents(state.lineup, home, "home");
  const awayEvents = generateGoalEvents(opponent.squad, away, "away");

  document.querySelector("#matchProgress").textContent =
    `JOGO ${state.matchIndex + 1}/7 · ${stage.label}`;
  document.querySelector("#stageTitle").innerHTML = stage.title;
  document.querySelector("#homeScore").textContent = "0";
  document.querySelector("#awayScore").textContent = "0";
  document.querySelector("#opponentLabel").textContent = `FIGUEIRENSE ${opponent.season}`;
  document.querySelector("#awayScorersLabel").textContent = `FIGUEIRENSE ${opponent.season}`;
  document.querySelector("#goalTimeline").innerHTML =
    '<div class="timeline-empty"><span>0\'</span><strong>A PARTIDA VAI COMEÇAR</strong></div>';
  renderTournamentTrack();
  renderPenaltyShootout(null, opponent.season);
  document.querySelector("#groupSummary").classList.add("hidden");
  document.querySelector("#resultCopy").textContent = "Acompanhe a partida minuto a minuto.";
  document.querySelector("#matchStar").classList.add("hidden");
  document.querySelector("#nextMatch").classList.add("hidden");
  document.querySelector("#playAgain").classList.add("hidden");
  document.querySelector("#viewTeam").classList.add("hidden");
  state.liveMinute = 0;
  state.currentMatch = { stage, strength, opponent, home, away, homeEvents, awayEvents };
  setMatchSpeed(state.matchSpeed);
  setSpeedControlsEnabled(true);
  document.querySelector("#matchStatus").textContent = "BOLA ROLANDO";
  document.querySelector("#matchMinute").textContent = "00'";
  document.querySelector(".match-control").classList.remove("penalty-mode");
  state.matchTimer = window.setInterval(advanceMatchClock, 180);
  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function advanceMatchClock() {
  state.liveMinute = Math.min(90, state.liveMinute + state.matchSpeed);
  const minute = state.liveMinute;
  const match = state.currentMatch;
  const visibleHome = match.homeEvents.filter(event => event.minute <= minute);
  const visibleAway = match.awayEvents.filter(event => event.minute <= minute);

  document.querySelector("#matchMinute").textContent = `${String(minute).padStart(2, "0")}'`;
  document.querySelector("#matchStatus").textContent =
    minute === 45 ? "INTERVALO" : minute >= 90 ? "APITO FINAL" : "BOLA ROLANDO";
  document.querySelector("#homeScore").textContent = visibleHome.length;
  document.querySelector("#awayScore").textContent = visibleAway.length;
  renderGoalTimeline(visibleHome, visibleAway, minute < 90);

  if (minute >= 90) finalizeLiveMatch();
}

function finalizeLiveMatch() {
  stopMatchTimer();
  setSpeedControlsEnabled(false);
  const { stage, strength, opponent, home, away } = state.currentMatch;

  if (!stage.knockout) {
    state.groupPoints += home > away ? 3 : home === away ? 1 : 0;
    completeTournamentMatch(null, true);
    return;
  }

  if (home === away) {
    const shootout = simulatePenaltyShootout(state.lineup, opponent.squad, strength, opponent.strength);
    startLivePenaltyShootout(shootout, opponent.season);
    return;
  }

  completeTournamentMatch(null, home > away);
}

function completeTournamentMatch(shootout, advanced) {
  const { stage, opponent, home, away } = state.currentMatch;
  state.tournamentOver = stage.knockout && !advanced;
  const isChampion = state.matchIndex === TOURNAMENT_STAGES.length - 1 && advanced;
  if (isChampion) document.querySelector("#stageTitle").innerHTML = "CAMPEÃO<br><em>ALVINEGRO.</em>";

  renderGroupSummary(stage);
  const decidedOnPenalties = Boolean(shootout);
  const copy = isChampion
    ? `Seu time venceu o Figueirense de ${opponent.season} e conquistou o torneio.`
    : state.tournamentOver
      ? decidedOnPenalties
        ? `O Figueirense de ${opponent.season} avançou nos pênaltis. Campanha encerrada.`
        : `O Figueirense de ${opponent.season} venceu e encerrou sua campanha.`
      : decidedOnPenalties
        ? `Classificação nos pênaltis contra o Figueirense de ${opponent.season}.`
        : home >= 7
          ? `O tempo dobrou. Seu time atropelou o Figueirense de ${opponent.season} e chegou ao sete.`
          : home > away
            ? `Misturar gerações funcionou: vitória sobre o Figueirense de ${opponent.season}.`
            : home === away
              ? `Forças equilibradas: empate contra o Figueirense de ${opponent.season}.`
              : `O Figueirense de ${opponent.season} levou a melhor desta vez.`;
  document.querySelector("#resultCopy").textContent = copy;
  renderMatchStar(shootout);
  state.matchResults.push({
    stage: stage.label,
    home,
    away,
    won: shootout ? advanced : home > away,
    draw: !shootout && home === away,
    penalties: shootout ? `${shootout.homeScore}–${shootout.awayScore}` : null,
    opponentSeason: opponent.season
  });
  document.querySelector("#viewTeam").classList.remove("hidden");
  updateTournamentActions(isChampion);
  renderCampaignCard(isChampion);
}

function renderMatchStar(shootout) {
  const { homeEvents, home, away } = state.currentMatch;
  const goalsByPlayer = homeEvents.reduce((totals, event) => {
    totals[event.name] = (totals[event.name] || 0) + 1;
    return totals;
  }, {});
  const scoredPenaltyNames = shootout
    ? shootout.homeKicks.filter(kick => kick.scored).map(kick => kick.name)
    : [];
  const star = state.lineup
    .map(player => ({
      player,
      goals: goalsByPlayer[player.name] || 0,
      penalty: scoredPenaltyNames.includes(player.name) ? 1 : 0
    }))
    .sort((a, b) =>
      b.goals - a.goals ||
      b.penalty - a.penalty ||
      b.player.rating - a.player.rating
    )[0];
  const reason = star.goals > 1
    ? `${star.goals} gols na partida`
    : star.goals === 1
      ? "Marcou e decidiu para o Figueira XI"
      : star.penalty
        ? "Converteu na disputa de pênaltis"
        : home < away && star.player.position === "Goleiro"
          ? "Evitou um placar ainda maior"
          : "Maior nota técnica da equipe";

  document.querySelector("#matchStarName").textContent = star.player.name;
  document.querySelector("#matchStarReason").textContent =
    `${reason} · ${star.player.season} · ${star.player.rating} OVR`;
  document.querySelector("#matchStar").classList.remove("hidden");
}

function stopMatchTimer() {
  if (state.matchTimer) {
    window.clearInterval(state.matchTimer);
    state.matchTimer = null;
  }
  if (state.penaltyTimer) {
    window.clearTimeout(state.penaltyTimer);
    state.penaltyTimer = null;
  }
}

function setMatchSpeed(speed) {
  state.matchSpeed = Number(speed);
  document.querySelectorAll("[data-speed]").forEach(button =>
    button.classList.toggle("selected", Number(button.dataset.speed) === state.matchSpeed)
  );
}

function setSpeedControlsEnabled(enabled) {
  document.querySelectorAll("[data-speed]").forEach(button => {
    button.disabled = !enabled;
  });
}

function opponentSquadForSeason(season) {
  const opponentNames = new Set();
  return FORMATION.map(slot => {
    const candidates = FIGUEIRA_PLAYERS
      .filter(player =>
        player.season === season &&
        playerRoles(player).includes(slot.role) &&
        !opponentNames.has(normalize(player.name))
      )
      .map(player => {
        const ratingData = editorialRating(player);
        return { ...player, rating: ratingData.value, ratingData };
      })
      .sort((a, b) => b.rating - a.rating);
    const selected = candidates[0];
    if (selected) opponentNames.add(normalize(selected.name));
    return selected;
  }).filter(Boolean);
}

function buildOpponent() {
  const availableSeasons = [...new Set(FIGUEIRA_PLAYERS.map(player => player.season))];
  const representedSeasons = new Set(state.seasons);
  const preferred = availableSeasons.filter(season =>
    !representedSeasons.has(season) && !state.opponentSeasons.has(season)
  );
  const pool = preferred.length ? preferred : availableSeasons;
  const squads = pool.map(season => ({
    season,
    squad: opponentSquadForSeason(season)
  }));
  const bestSize = Math.max(...squads.map(candidate => candidate.squad.length));
  const completeOptions = squads.filter(candidate => candidate.squad.length === bestSize);
  const opponent = completeOptions[Math.floor(Math.random() * completeOptions.length)];
  const { season, squad } = opponent;
  state.opponentSeasons.add(season);

  const average = squad.length
    ? squad.reduce((sum, player) => sum + player.rating, 0) / squad.length
    : 68;
  return {
    season,
    strength: average + 1.5,
    squad
  };
}

function renderTournamentTrack() {
  const track = document.querySelector("#tournamentTrack");
  track.innerHTML = TOURNAMENT_STAGES.map((stage, index) => {
    const status = index < state.matchIndex ? "done" : index === state.matchIndex ? "current" : "";
    return `<span class="track-step ${status}">${stage.short}</span>`;
  }).join("");
}

function renderGroupSummary(stage) {
  const summary = document.querySelector("#groupSummary");
  summary.classList.toggle("hidden", stage.knockout);
  if (!stage.knockout) {
    summary.textContent = `${state.groupPoints} ponto${state.groupPoints === 1 ? "" : "s"} após ${state.matchIndex + 1} rodada${state.matchIndex ? "s" : ""}`;
  }
}

function updateTournamentActions(isChampion) {
  const nextButton = document.querySelector("#nextMatch");
  const restartButton = document.querySelector("#playAgain");
  const campaignEnded = state.tournamentOver || isChampion;

  nextButton.classList.toggle("hidden", campaignEnded);
  restartButton.classList.toggle("hidden", !campaignEnded);

  if (!campaignEnded) {
    const nextStage = TOURNAMENT_STAGES[state.matchIndex + 1];
    nextButton.firstChild.textContent =
      state.matchIndex === 2 ? "IR PARA OITAVAS " : `PRÓXIMO: ${nextStage.short} `;
  }
  restartButton.textContent = isChampion ? "JOGAR NOVO TORNEIO" : "TENTAR NOVAMENTE";
}

function campaignSummary(isChampion) {
  const results = state.matchResults;
  const finalMatch = results[results.length - 1];
  return {
    isChampion,
    games: results.length,
    wins: results.filter(match => match.won).length,
    goalsFor: results.reduce((sum, match) => sum + match.home, 0),
    goalsAgainst: results.reduce((sum, match) => sum + match.away, 0),
    overall: Math.round(state.lineup.reduce((sum, player) => sum + player.rating, 0) / state.lineup.length),
    finalScore: finalMatch.penalties || `${finalMatch.home}–${finalMatch.away}`,
    stage: isChampion ? "CAMPEÃO DO TORNEIO" : TOURNAMENT_STAGES[state.matchIndex].label.toUpperCase(),
    code: `#FFC${String(
      state.lineup.reduce((sum, player) => sum + player.season + player.rating, 0) % 1000
    ).padStart(3, "0")}`
  };
}

function renderCampaignCard(isChampion) {
  const wrap = document.querySelector("#campaignCardWrap");
  const campaignEnded = state.tournamentOver || isChampion;
  wrap.classList.toggle("hidden", !campaignEnded);
  if (!campaignEnded) return;

  const summary = campaignSummary(isChampion);
  document.querySelector("#campaignStatus").textContent = isChampion ? "CAMPEÃO" : "ELIMINADO";
  document.querySelector("#campaignRecord").textContent = `${summary.wins}–${summary.games - summary.wins}`;
  document.querySelector("#campaignStage").textContent = summary.stage;
  document.querySelector("#campaignGoalsFor").textContent = summary.goalsFor;
  document.querySelector("#campaignGoalsAgainst").textContent = summary.goalsAgainst;
  document.querySelector("#campaignOverall").textContent =
    state.mode === "almanaque" ? "—" : summary.overall;
  document.querySelector("#campaignWins").textContent = summary.wins;
  document.querySelector("#campaignCode").textContent = summary.code;
  document.querySelector("#campaignLineup").innerHTML = state.lineup.map((player, index) => `
    <li>
      <span><b>${FORMATION[index].role}</b>${player.name}</span>
      <small>${player.season}</small>
    </li>
  `).join("");
}

function drawCampaignImage() {
  const summary = campaignSummary(
    state.matchIndex === TOURNAMENT_STAGES.length - 1 && !state.tournamentOver
  );
  const canvas = document.createElement("canvas");
  canvas.width = 760;
  canvas.height = 1380;
  const context = canvas.getContext("2d");
  const ink = "#111410";
  const paper = "#f2efe5";
  const white = "#fffef8";
  const acid = "#c8ff31";

  context.fillStyle = paper;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = white;
  context.fillRect(32, 32, 696, 1316);
  context.strokeStyle = ink;
  context.lineWidth = 3;
  context.strokeRect(32, 32, 696, 1316);

  context.fillStyle = ink;
  context.beginPath();
  context.arc(92, 90, 31, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = paper;
  context.font = "900 35px Georgia";
  context.textAlign = "center";
  context.fillText("F", 92, 103);
  context.textAlign = "left";
  context.fillStyle = ink;
  context.font = "900 22px Arial";
  context.fillText("FIGUEIRA XI", 139, 84);
  context.font = "700 13px Arial";
  context.fillText("1970 — 2026", 139, 105);
  context.textAlign = "right";
  context.font = "700 15px monospace";
  context.fillText(summary.code, 687, 92);
  context.beginPath();
  context.moveTo(72, 137);
  context.lineTo(688, 137);
  context.stroke();

  context.textAlign = "center";
  context.font = "900 43px Arial Black, Arial";
  context.fillText(summary.isChampion ? "CAMPEÃO" : "ELIMINADO", 380, 210);
  context.font = "900 132px Arial Black, Arial";
  context.fillText(`${summary.wins}–${summary.games - summary.wins}`, 380, 350);
  context.font = "900 18px Arial";
  context.fillText(summary.stage, 380, 390);

  const stats = [
    [summary.goalsFor, "GOLS PRÓ"],
    [summary.goalsAgainst, "SOFRIDOS"],
    [state.mode === "almanaque" ? "—" : summary.overall, "OVERALL"],
    [summary.wins, "VITÓRIAS"]
  ];
  stats.forEach(([value, label], index) => {
    const x = 72 + index * 154;
    context.fillStyle = index === 3 ? acid : white;
    context.fillRect(x, 430, 154, 105);
    context.strokeStyle = ink;
    context.strokeRect(x, 430, 154, 105);
    context.fillStyle = ink;
    context.font = "900 35px Arial Black, Arial";
    context.fillText(String(value), x + 77, 477);
    context.font = "900 11px Arial";
    context.fillText(label, x + 77, 508);
  });

  state.lineup.forEach((player, index) => {
    const y = 570 + index * 61;
    context.fillStyle = index % 2 ? "#f5f2e9" : white;
    context.fillRect(72, y, 616, 48);
    context.strokeStyle = "rgba(17,20,16,.22)";
    context.strokeRect(72, y, 616, 48);
    context.textAlign = "left";
    context.fillStyle = ink;
    context.font = "900 13px Arial";
    context.fillText(FORMATION[index].role, 91, y + 30);
    context.font = "800 18px Arial";
    context.fillText(player.name.slice(0, 28), 145, y + 30);
    context.textAlign = "right";
    context.font = "800 14px Arial";
    context.fillText(String(player.season), 668, y + 29);
  });

  context.textAlign = "center";
  context.fillStyle = ink;
  context.font = "700 14px Arial";
  context.fillText("figueiraxi.com.br · monte o seu", 380, 1305);
  return canvas;
}

function showShareFeedback(message) {
  const feedback = document.querySelector("#shareFeedback");
  feedback.textContent = message;
  feedback.classList.remove("hidden");
}

async function shareCampaignImage() {
  const canvas = drawCampaignImage();
  const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));
  const file = new File([blob], `figueira-xi-${document.querySelector("#campaignCode").textContent.slice(1)}.png`, {
    type: "image/png"
  });

  if (navigator.canShare?.({ files: [file] })) {
    await navigator.share({
      title: "Minha campanha no Figueira XI",
      text: document.querySelector("#campaignStatus").textContent,
      files: [file]
    });
    return;
  }

  const link = document.createElement("a");
  link.download = file.name;
  link.href = URL.createObjectURL(blob);
  link.click();
  URL.revokeObjectURL(link.href);
  showShareFeedback("Imagem baixada.");
}

async function shareCampaignLink() {
  const summary = `${document.querySelector("#campaignStatus").textContent}: ${document.querySelector("#campaignRecord").textContent} no Figueira XI`;
  if (navigator.share) {
    await navigator.share({ title: "Figueira XI", text: summary, url: window.location.href });
    return;
  }
  await navigator.clipboard.writeText(`${summary} ${window.location.href}`);
  showShareFeedback("Link copiado.");
}

function generateGoalEvents(squad, goals, side) {
  if (goals === 0) return [];

  const weighted = squad.flatMap(player => {
    const group = player.position;
    const weight = group === "Atacante" ? 6 : group === "Meia" ? 3 : group === "Defensor" ? 1 : 0;
    return Array(weight).fill(player);
  });

  const usedMinutes = new Set();
  const events = [];
  for (let goal = 0; goal < goals; goal += 1) {
    const scorer = weighted[Math.floor(Math.random() * weighted.length)] || squad[0];
    let minute = 3 + Math.floor(Math.random() * 88);
    while (usedMinutes.has(minute)) minute = minute === 90 ? 3 : minute + 1;
    usedMinutes.add(minute);
    events.push({ name: scorer.name, minute, side });
  }

  return events;
}

function penaltyTakers(squad) {
  return squad
    .filter(player => player.position !== "Goleiro")
    .sort((a, b) => {
      const attackA = a.position === "Atacante" ? 3 : a.position === "Meia" ? 2 : 1;
      const attackB = b.position === "Atacante" ? 3 : b.position === "Meia" ? 2 : 1;
      return attackB - attackA || b.rating - a.rating;
    });
}

function simulatePenaltyShootout(homeSquad, awaySquad, homeStrength, awayStrength) {
  const homeTakers = penaltyTakers(homeSquad);
  const awayTakers = penaltyTakers(awaySquad);
  const homeKicks = [];
  const awayKicks = [];
  let homeScore = 0;
  let awayScore = 0;
  let kick = 0;

  const takeKick = (takers, strength, otherStrength) => {
    const player = takers[kick % takers.length];
    const chance = Math.max(0.58, Math.min(0.88, 0.74 + (strength - otherStrength) / 180));
    return { name: player.name, scored: Math.random() < chance };
  };

  for (; kick < 5; kick += 1) {
    const homeKick = takeKick(homeTakers, homeStrength, awayStrength);
    const awayKick = takeKick(awayTakers, awayStrength, homeStrength);
    homeKicks.push(homeKick);
    awayKicks.push(awayKick);
    if (homeKick.scored) homeScore += 1;
    if (awayKick.scored) awayScore += 1;
  }

  while (homeScore === awayScore) {
    const homeKick = takeKick(homeTakers, homeStrength, awayStrength);
    const awayKick = takeKick(awayTakers, awayStrength, homeStrength);
    homeKicks.push(homeKick);
    awayKicks.push(awayKick);
    if (homeKick.scored) homeScore += 1;
    if (awayKick.scored) awayScore += 1;
    kick += 1;
  }

  return { homeScore, awayScore, homeKicks, awayKicks };
}

function startLivePenaltyShootout(shootout, opponentSeason) {
  setMatchSpeed(1);
  setSpeedControlsEnabled(false);
  document.querySelector(".match-control").classList.add("penalty-mode");
  document.querySelector("#matchStatus").textContent = "PÊNALTIS";
  document.querySelector("#matchMinute").textContent = "90'";

  const panel = document.querySelector("#penalties");
  panel.classList.remove("hidden");
  panel.classList.add("live");
  document.querySelector("#penaltyScore").textContent = "0 × 0";
  document.querySelector("#awayPenaltiesLabel").textContent = `FIGUEIRENSE ${opponentSeason}`;
  document.querySelector("#homePenalties").innerHTML = "";
  document.querySelector("#awayPenalties").innerHTML = "";
  renderPenaltyNarration(null);

  const sequence = shootout.homeKicks.flatMap((homeKick, index) => [
    { ...homeKick, side: "home" },
    { ...shootout.awayKicks[index], side: "away" }
  ]);
  const visibleHome = [];
  const visibleAway = [];
  let homeScore = 0;
  let awayScore = 0;
  let index = 0;

  if (window.matchMedia("(max-width: 560px)").matches) {
    window.requestAnimationFrame(() =>
      panel.scrollIntoView({ behavior: "smooth", block: "center" })
    );
  }

  const revealNextKick = () => {
    const kick = sequence[index];
    if (!kick) {
      panel.classList.remove("live");
      state.penaltyTimer = window.setTimeout(() => {
        state.penaltyTimer = null;
        completeTournamentMatch(shootout, shootout.homeScore > shootout.awayScore);
      }, 3000);
      return;
    }

    if (kick.side === "home") {
      visibleHome.push(kick);
      if (kick.scored) homeScore += 1;
    } else {
      visibleAway.push(kick);
      if (kick.scored) awayScore += 1;
    }

    document.querySelector("#penaltyScore").textContent = `${homeScore} × ${awayScore}`;
    renderKicks("#homePenalties", visibleHome);
    renderKicks("#awayPenalties", visibleAway);
    renderPenaltyNarration(kick, opponentSeason);
    index += 1;
    state.penaltyTimer = window.setTimeout(revealNextKick, 3000);
  };

  state.penaltyTimer = window.setTimeout(revealNextKick, 3000);
}

function renderPenaltyNarration(kick, opponentSeason) {
  const live = document.querySelector("#penaltyLive");
  if (!kick) {
    live.innerHTML = `
      <span class="kick-icon pending">•</span>
      <strong>PREPARANDO A PRIMEIRA COBRANÇA</strong>
    `;
    return;
  }

  const team = kick.side === "home" ? "FIGUEIRA XI" : `FIGUEIRENSE ${opponentSeason}`;
  live.innerHTML = `
    <span class="kick-icon ${kick.scored ? "goal" : "miss"}">${kick.scored ? "●" : "×"}</span>
    <span><small>${team}</small><strong>${kick.name} bateu... ${kick.scored ? "GOL!" : "PERDEU!"}</strong></span>
  `;
}

function renderPenaltyShootout(shootout, opponentSeason) {
  const panel = document.querySelector("#penalties");
  panel.classList.toggle("hidden", !shootout);
  panel.classList.remove("live");
  if (!shootout) {
    document.querySelector("#homePenalties").innerHTML = "";
    document.querySelector("#awayPenalties").innerHTML = "";
    renderPenaltyNarration(null);
    return;
  }

  document.querySelector("#penaltyScore").textContent =
    `${shootout.homeScore} × ${shootout.awayScore}`;
  document.querySelector("#awayPenaltiesLabel").textContent =
    `FIGUEIRENSE ${opponentSeason}`;
  renderKicks("#homePenalties", shootout.homeKicks);
  renderKicks("#awayPenalties", shootout.awayKicks);
}

function renderKicks(selector, kicks) {
  document.querySelector(selector).innerHTML = kicks.map(kick => `
    <li>
      <span>${kick.name}</span>
      <b class="kick-icon ${kick.scored ? "goal" : "miss"}"
        aria-label="${kick.scored ? "Gol" : "Perdeu"}">${kick.scored ? "✓" : "×"}</b>
    </li>
  `).join("");
}

function renderGoalTimeline(homeEvents, awayEvents, live = false) {
  const timeline = document.querySelector("#goalTimeline");
  const events = [...homeEvents, ...awayEvents].sort((a, b) => a.minute - b.minute);

  if (!events.length) {
    timeline.innerHTML = `
      <div class="timeline-empty">
        <span>${live ? `${state.liveMinute}'` : "90'"}</span>
        <strong>${live ? "SEM GOLS ATÉ AGORA" : "NENHUM GOL NA PARTIDA"}</strong>
      </div>
    `;
    return;
  }

  timeline.innerHTML = events.map(event => `
    <div class="goal-event ${event.side}">
      <div class="goal-side home-detail">
        ${event.side === "home" ? `<strong>${event.name}</strong><i>⚽</i>` : ""}
      </div>
      <time>${event.minute}'</time>
      <div class="goal-side away-detail">
        ${event.side === "away" ? `<i>⚽</i><strong>${event.name}</strong>` : ""}
      </div>
    </div>
  `).join("");
}

document.querySelector("#startGame").addEventListener("click", startGame);
document.querySelector("#resetGame").addEventListener("click", startGame);
document.querySelector("#rollDice").addEventListener("click", rollSeason);
document.querySelector("#rerollSeason").addEventListener("click", rerollSeason);
document.querySelectorAll("[data-speed]").forEach(button => {
  button.addEventListener("click", () => setMatchSpeed(button.dataset.speed));
});
document.querySelectorAll("[data-formation]").forEach(button => {
  button.addEventListener("click", () => {
    if (state.round > 0 || state.seasons.length) return;
    state.formation = button.dataset.formation;
    FORMATION = createFormation(state.formation, state.style);
    state.lineup = Array(11).fill(null);
    document.querySelectorAll("[data-formation]").forEach(option =>
      option.classList.toggle("selected", option === button)
    );
    renderPitch();
  });
});
document.querySelectorAll("[data-style]").forEach(button => {
  button.addEventListener("click", () => {
    if (state.round > 0 || state.seasons.length) return;
    state.style = button.dataset.style;
    FORMATION = createFormation(state.formation, state.style);
    state.lineup = Array(11).fill(null);
    document.querySelectorAll("[data-style]").forEach(option =>
      option.classList.toggle("selected", option === button)
    );
    renderPitch();
  });
});
document.querySelectorAll("[data-mode]").forEach(button => {
  button.addEventListener("click", () => {
    if (state.round > 0 || state.seasons.length) return;
    state.mode = button.dataset.mode;
    document.querySelectorAll("[data-mode]").forEach(option =>
      option.classList.toggle("selected", option === button)
    );
    renderPitch();
  });
});
document.querySelector("#playAgain").addEventListener("click", startGame);
document.querySelector("#nextMatch").addEventListener("click", () => {
  state.matchIndex += 1;
  simulateTournamentMatch();
});
document.querySelector("#shareCampaignImage").addEventListener("click", () => {
  shareCampaignImage().catch(() => showShareFeedback("Não foi possível compartilhar a imagem."));
});
document.querySelector("#shareCampaignLink").addEventListener("click", () => {
  shareCampaignLink().catch(() => showShareFeedback("Não foi possível compartilhar o link."));
});
document.querySelector("#viewTeam").addEventListener("click", () => {
  state.viewingTeam = true;
  result.classList.add("hidden");
  game.classList.add("team-view");
  game.classList.remove("hidden");
  document.querySelector("#closeTeamView").classList.remove("hidden");
  document.querySelector("#resetGame").classList.add("hidden");
  game.scrollIntoView({ behavior: "smooth", block: "start" });
});
document.querySelector("#closeTeamView").addEventListener("click", () => {
  state.viewingTeam = false;
  game.classList.add("hidden");
  game.classList.remove("team-view");
  document.querySelector("#closeTeamView").classList.add("hidden");
  document.querySelector("#resetGame").classList.remove("hidden");
  result.classList.remove("hidden");
  result.scrollIntoView({ behavior: "smooth", block: "start" });
});
playerSearch.addEventListener("input", renderPlayers);

const dialog = document.querySelector("#rulesDialog");
document.querySelector("#howToPlay").addEventListener("click", () => dialog.showModal());
document.querySelector("#closeRules").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});

document.querySelector("#playerCount").textContent =
  new Intl.NumberFormat("pt-BR").format(new Set(FIGUEIRA_PLAYERS.map(player => normalize(player.name))).size);
