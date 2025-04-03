// Inicializa o mapa dentro da div "map"
var map = L.map('map', {
    crs: L.CRS.Simple, // Define um sistema de coordenadas simples para imagens
    minZoom: -3,       // Define o nível de zoom inicial
    maxZoom: 2
  });
  
  // Carregar a imagem do mapa
  var imgWidth = 8192, imgHeight = 4608; // Dimensões da imagem (substitua pelos valores corretos)
  var bounds = [[0, 0], [imgHeight, imgWidth]]; // Define os limites do mapa baseado no tamanho da imagem
  L.imageOverlay('mapa.png', bounds).addTo(map); // Substitua 'mapa.jpg' pelo nome do seu arquivo
  
  map.fitBounds(bounds); // Ajusta o zoom para mostrar toda a imagem
  
  // Lista de locais (coordenadas dentro da imagem)
  var locais = [
    { x: 2113, y: 2197, nome: "Chave Baú" },
    { x: 2964, y: 1763, nome: "Chave Baú" },
    { x: 2228, y: 1202, nome: "Chave Baú" },
    { x: 3417, y: 1930, nome: "Caverna Escondida" }
  ];
  
  // Adiciona marcadores no mapa com base nas coordenadas da imagem
  locais.forEach(local => {
    L.marker([local.y, local.x]).addTo(map)
      .bindPopup(local.nome); // Exibe o nome ao clicar no marcador
  });

  map.on('click', function(event) {
    var coords = event.latlng;
    L.marker([coords.lat, coords.lng]).addTo(map)
      .bindPopup(`X = ${Math.round(coords.lng)}, Y = ${Math.round(coords.lat)}`)
      .openPopup();
  });
  
  