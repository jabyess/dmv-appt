

let services = {
  "Motorcycle permit":
    "10226f4de0f460aa67bb735db97f9eb434b8ac2a144e40a20ff1e1848ffbeae7",
  "Register Vehicle / Get plates":
    "ee3480a8232e72e54071cd185388c691f829fa2670e5e6a6f966385908462cb8"
}



let locOnlyPermit = {
  "Albany - Central Avenue":
    "3f660fb7ee056bf99d53b7411b18f8186f5eb5105546d784de7d374abc8fd0a0",
  "Bronx - Bronx License Center":
    "1182b855bd56271c687d54d6d7f9559926297a76260f8329574d3396bf810763",
  "Bronx - Bronx Registration Center":
    "99f6c320206ee03f9dcce5b83eddcbfd30cd2e30bbe53c51d7116c2b33ce9ccd",
  "Brooklyn - Atlantic Center Mall":
    "c92d2048b00326a0d9452e478db504ce41ec8f67f8e008034295cbf85cf902df",
  "Brooklyn - Coney Island":
    "0b2bd54bb4e54eae475cf1b266cf85bec683771e5e231af74e292177ae5e2640",
  "Manhattan - Harlem":
    "ba4178c73f0cb0c91cf158865f174487cd4dcc79a86bdbbe5502730ed7e7b5b1",
  "Manhattan - Lower Manhattan (Financial District)":
    "8bcc5ca5cad16666ba6f5dd43d15241e172bd511f7e8d6f2e1caa2380b66776a",
  "Manhattan - Midtown Manhattan (Near Penn Station)":
    "0ea16b72515a86e0cc00d186b249b0ebc61ed10b5289394af9b0cab8de5dafda",
  "Nassau - Bethpage":
    "2a72087de98905257b00d3408dd0421a1082b53303159b04cbf5da672673fb4a",
  "Nassau - Garden City":
    "bcdeedf10b9b7f92097db7d887686d1df79e2acdcec31334f4efbbbd679c9320",
  "Nassau - Massapequa":
    "512e28a9b920ee045bf588bf0de12289f3b06abf6623aaf228c145251a2a2b71",
  "Nassau - Oak Street License Center":
    "07ba47584cb979f930533fe6de50c8fa5be76bee3f52598e6e9e38e8820880db",
  "Onondaga - North Syracuse":
    "4a5ccf18dfe6a7d2b5025cea63d69605eddbe5ecbf820d44f8b69bd8ffac603c",
  "Onondaga - Syracuse":
    "bd268e31ce215e555815e79a142964560fca5b653a9f486d4e37a7e293a014ee",
  "Queens - College Point":
    "fb052d6eae67926d8d5449d7317c8528e1e3d02b19441ead85f3150915e2abbe",
  "Queens - Jamaica":
    "d0099bebf8e51979019b5e45b2c7dfeab9830f0213a4da0cfd569ec145eb07a9",
  "Queens - Springfield Gardens":
    "2da2cfd743542bc26618bf7d35559501aee630de80c66a5f884f86d61bc5e780",
  "Queens - Queens College License Center":
    "887df9bcd65c813a07ac3ae5e818d4faec1aa02bb467ea5cb2e1e2e878bfa32a",
  "Richmond - Staten Island":
    "57eb2286cc842e01e1be5970f538e5548c3e624608ba3bef8b92b256569f003d",
  "Rockland - West Haverstraw":
    "7f98a1734be1c8feb4b3f30dc7e9cf68fb7f1dce8c5eb7e4d76ed7ebb34e2136",
  "Suffolk - Dix Hills/Huntington":
    "8d970b60f29441704f53fe8d08a389388cbbd7c2081232fb59d9289e3ac1bf35",
  "Suffolk - Hauppauge":
    "d0ab21c7180a46944a09a853677eb3357d8b53f4ea9f95651c5f154b5d3250ea",
  "Suffolk - Medford":
    "8038f30cdf05b89c635d129eb40b032cd9fff65d13158319a2df996b55f4f597",
  "Suffolk - Port Jefferson":
    "f11ab9eacb835e5e5d55e738c011f1dfc5bd39ca3064b9db2946d5bbedc2569d",
  "Suffolk - Riverhead":
    "c366dfde60f1fc6007fbe3457b20d131b92a2273a8a2473968474e8acfb00a8b",
  "Westchester - Peekskill":
    "1dfcc7900a35932a83e8b05b89d7c67e63a666dc4288bc73262712725787176d",
  "Westchester - White Plains":
    "ee9d5b38b121f0dd4a336a6f36aedff585229808390ebad45860feb74c2d5b63",
  "Westchester - Yonkers":
    "46a32c2d34d1c7719a9e760613f0b7567b34987534a02d5be6cf98c6792a5110",
}

let locOnlyReg = {
  "Albany - Central Avenue":
    "3f660fb7ee056bf99d53b7411b18f8186f5eb5105546d784de7d374abc8fd0a0",
  "Bronx - Bronx License Center":
    "1182b855bd56271c687d54d6d7f9559926297a76260f8329574d3396bf810763",
  "Bronx - Bronx Registration Center":
    "99f6c320206ee03f9dcce5b83eddcbfd30cd2e30bbe53c51d7116c2b33ce9ccd",
  "Brooklyn - Atlantic Center Mall":
    "c92d2048b00326a0d9452e478db504ce41ec8f67f8e008034295cbf85cf902df",
  "Brooklyn - Coney Island":
    "0b2bd54bb4e54eae475cf1b266cf85bec683771e5e231af74e292177ae5e2640",
  "Manhattan - Harlem":
    "ba4178c73f0cb0c91cf158865f174487cd4dcc79a86bdbbe5502730ed7e7b5b1",
  "Manhattan - Lower Manhattan (Financial District)":
    "8bcc5ca5cad16666ba6f5dd43d15241e172bd511f7e8d6f2e1caa2380b66776a",
  "Manhattan - Midtown Manhattan (Near Penn Station)":
    "0ea16b72515a86e0cc00d186b249b0ebc61ed10b5289394af9b0cab8de5dafda",
  "Nassau - Bethpage":
    "2a72087de98905257b00d3408dd0421a1082b53303159b04cbf5da672673fb4a",
  "Nassau - Garden City":
    "bcdeedf10b9b7f92097db7d887686d1df79e2acdcec31334f4efbbbd679c9320",
  "Nassau - Massapequa":
    "512e28a9b920ee045bf588bf0de12289f3b06abf6623aaf228c145251a2a2b71",
  "Nassau - Oak Street License Center":
    "07ba47584cb979f930533fe6de50c8fa5be76bee3f52598e6e9e38e8820880db",
  "Onondaga - North Syracuse":
    "4a5ccf18dfe6a7d2b5025cea63d69605eddbe5ecbf820d44f8b69bd8ffac603c",
  "Onondaga - Syracuse":
    "bd268e31ce215e555815e79a142964560fca5b653a9f486d4e37a7e293a014ee",
  "Queens - College Point":
    "fb052d6eae67926d8d5449d7317c8528e1e3d02b19441ead85f3150915e2abbe",
  "Queens - Jamaica":
    "d0099bebf8e51979019b5e45b2c7dfeab9830f0213a4da0cfd569ec145eb07a9",
  "Queens - Springfield Gardens":
    "2da2cfd743542bc26618bf7d35559501aee630de80c66a5f884f86d61bc5e780",
  "Richmond - Staten Island":
    "57eb2286cc842e01e1be5970f538e5548c3e624608ba3bef8b92b256569f003d",
  "Rockland - West Haverstraw":
    "7f98a1734be1c8feb4b3f30dc7e9cf68fb7f1dce8c5eb7e4d76ed7ebb34e2136",
  "Suffolk - Hauppauge":
    "d0ab21c7180a46944a09a853677eb3357d8b53f4ea9f95651c5f154b5d3250ea",
  "Suffolk - Medford":
    "8038f30cdf05b89c635d129eb40b032cd9fff65d13158319a2df996b55f4f597",
  "Suffolk - Port Jefferson":
    "f11ab9eacb835e5e5d55e738c011f1dfc5bd39ca3064b9db2946d5bbedc2569d",
  "Suffolk - Riverhead":
    "c366dfde60f1fc6007fbe3457b20d131b92a2273a8a2473968474e8acfb00a8b",
  "Westchester - Peekskill":
    "1dfcc7900a35932a83e8b05b89d7c67e63a666dc4288bc73262712725787176d",
  "Westchester - White Plains":
    "ee9d5b38b121f0dd4a336a6f36aedff585229808390ebad45860feb74c2d5b63",
  "Westchester - Yonkers":
    "46a32c2d34d1c7719a9e760613f0b7567b34987534a02d5be6cf98c6792a5110",

}

let locations = {
  "Albany - Central Avenue":
    "3f660fb7ee056bf99d53b7411b18f8186f5eb5105546d784de7d374abc8fd0a0",
  "Bronx - Bronx License Center":
    "1182b855bd56271c687d54d6d7f9559926297a76260f8329574d3396bf810763",
  "Bronx - Bronx Registration Center":
    "99f6c320206ee03f9dcce5b83eddcbfd30cd2e30bbe53c51d7116c2b33ce9ccd",
  "Bronx - Traffic Violations Bureau (TVB)":
    "0a4b5fa1c341553382a0edd3d94494885c7df0d1d344bb7ee423fbf87ac3f08c",
  "Brooklyn - Atlantic Center Mall":
    "c92d2048b00326a0d9452e478db504ce41ec8f67f8e008034295cbf85cf902df",
  "Brooklyn - Coney Island":
    "0b2bd54bb4e54eae475cf1b266cf85bec683771e5e231af74e292177ae5e2640",
  "Brooklyn North - Traffic Violations Bureau (TVB)":
    "19aea79d6e0792bf12e58590a84a381cc2e3719c1a85e5d763d6ac9d6415e9cd",
  "Brooklyn South - Traffic Violations Bureau (TVB)":
    "f6c7a34b174fe992e5ffe23df19abf46f229ae10388b8048141b2f4199fd46a1",
  "Manhattan - Harlem":
    "ba4178c73f0cb0c91cf158865f174487cd4dcc79a86bdbbe5502730ed7e7b5b1",
  "Manhattan - License Express (West 30th St.)":
    "179ae5ccf5c698b59667f2bdade8a5866f8888edfb922b10caaab2821d50169b",
  "Manhattan - Lower Manhattan (Financial District)":
    "8bcc5ca5cad16666ba6f5dd43d15241e172bd511f7e8d6f2e1caa2380b66776a",
  "Manhattan - Midtown Manhattan (Near Penn Station)":
    "0ea16b72515a86e0cc00d186b249b0ebc61ed10b5289394af9b0cab8de5dafda",
  "Manhattan North - Traffic Violations Bureau (TVB)":
    "9e807e3705a27988bbabd1c8b67e1f2e7ab4e59987bd36d4aec7102345ba4780",
  "Manhattan South - Traffic Violations Bureau (TVB)":
    "f4a0d4f38392a8fad80e6db9890fb68f641df1cbcec62434df169982edeb9c6e",
  "Nassau - Bethpage":
    "2a72087de98905257b00d3408dd0421a1082b53303159b04cbf5da672673fb4a",
  "Nassau - Garden City":
    "bcdeedf10b9b7f92097db7d887686d1df79e2acdcec31334f4efbbbd679c9320",
  "Nassau - Massapequa":
    "512e28a9b920ee045bf588bf0de12289f3b06abf6623aaf228c145251a2a2b71",
  "Nassau - Oak Street License Center":
    "07ba47584cb979f930533fe6de50c8fa5be76bee3f52598e6e9e38e8820880db",
  "Onondaga - North Syracuse":
    "4a5ccf18dfe6a7d2b5025cea63d69605eddbe5ecbf820d44f8b69bd8ffac603c",
  "Onondaga - Syracuse":
    "bd268e31ce215e555815e79a142964560fca5b653a9f486d4e37a7e293a014ee",
  "Queens - College Point":
    "fb052d6eae67926d8d5449d7317c8528e1e3d02b19441ead85f3150915e2abbe",
  "Queens - Jamaica":
    "d0099bebf8e51979019b5e45b2c7dfeab9830f0213a4da0cfd569ec145eb07a9",
  "Queens - Queens College License Center":
    "887df9bcd65c813a07ac3ae5e818d4faec1aa02bb467ea5cb2e1e2e878bfa32a",
  "Queens - Springfield Gardens":
    "2da2cfd743542bc26618bf7d35559501aee630de80c66a5f884f86d61bc5e780",
  "Queens North - Traffic Violations Bureau (TVB)":
    "d595326e4d0a22132503517b17441335141a5dfe249112365e044c85f0631ff0",
  "Queens South - Traffic Violations Bureau (TVB)":
    "0ac4c5008bb7758fd457422805b09f3d84cd1df9d0ed3ca651a018baca8dfc94",
  "Richmond - Staten Island":
    "57eb2286cc842e01e1be5970f538e5548c3e624608ba3bef8b92b256569f003d",
  "Richmond - Traffic Violations Bureau (TVB)":
    "d03e4680536343341ea72455c3e9b02a4402645eb33830c059f777c0fffaa7d0",
  "Rockland - West Haverstraw":
    "7f98a1734be1c8feb4b3f30dc7e9cf68fb7f1dce8c5eb7e4d76ed7ebb34e2136",
  "Suffolk - Dix Hills/Huntington":
    "8d970b60f29441704f53fe8d08a389388cbbd7c2081232fb59d9289e3ac1bf35",
  "Suffolk - Hauppauge":
    "d0ab21c7180a46944a09a853677eb3357d8b53f4ea9f95651c5f154b5d3250ea",
  "Suffolk - Medford":
    "8038f30cdf05b89c635d129eb40b032cd9fff65d13158319a2df996b55f4f597",
  "Suffolk - Port Jefferson":
    "f11ab9eacb835e5e5d55e738c011f1dfc5bd39ca3064b9db2946d5bbedc2569d",
  "Suffolk - Riverhead":
    "c366dfde60f1fc6007fbe3457b20d131b92a2273a8a2473968474e8acfb00a8b",
  "Westchester - Peekskill":
    "1dfcc7900a35932a83e8b05b89d7c67e63a666dc4288bc73262712725787176d",
  "Westchester - White Plains":
    "ee9d5b38b121f0dd4a336a6f36aedff585229808390ebad45860feb74c2d5b63",
  "Westchester - Yonkers":
    "46a32c2d34d1c7719a9e760613f0b7567b34987534a02d5be6cf98c6792a5110",
}

let locById = {
  "3f660fb7ee056bf99d53b7411b18f8186f5eb5105546d784de7d374abc8fd0a0":
    "Albany - Central Avenue",

  "1182b855bd56271c687d54d6d7f9559926297a76260f8329574d3396bf810763":
    "Bronx - Bronx License Center",

  "99f6c320206ee03f9dcce5b83eddcbfd30cd2e30bbe53c51d7116c2b33ce9ccd":
    "Bronx - Bronx Registration Center",

  "0a4b5fa1c341553382a0edd3d94494885c7df0d1d344bb7ee423fbf87ac3f08c":
    "Bronx - Traffic Violations Bureau (TVB)",

  c92d2048b00326a0d9452e478db504ce41ec8f67f8e008034295cbf85cf902df:
    "Brooklyn - Atlantic Center Mall",

  "0b2bd54bb4e54eae475cf1b266cf85bec683771e5e231af74e292177ae5e2640":
    "Brooklyn - Coney Island",

  "19aea79d6e0792bf12e58590a84a381cc2e3719c1a85e5d763d6ac9d6415e9cd":
    "Brooklyn North - Traffic Violations Bureau (TVB)",

  f6c7a34b174fe992e5ffe23df19abf46f229ae10388b8048141b2f4199fd46a1:
    "Brooklyn South - Traffic Violations Bureau (TVB)",

  ba4178c73f0cb0c91cf158865f174487cd4dcc79a86bdbbe5502730ed7e7b5b1:
    "Manhattan - Harlem",

  "179ae5ccf5c698b59667f2bdade8a5866f8888edfb922b10caaab2821d50169b":
    "Manhattan - License Express (West 30th St.)",

  "8bcc5ca5cad16666ba6f5dd43d15241e172bd511f7e8d6f2e1caa2380b66776a":
    "Manhattan - Lower Manhattan (Financial District)",

  "0ea16b72515a86e0cc00d186b249b0ebc61ed10b5289394af9b0cab8de5dafda":
    "Manhattan - Midtown Manhattan (Near Penn Station)",

  "9e807e3705a27988bbabd1c8b67e1f2e7ab4e59987bd36d4aec7102345ba4780":
    "Manhattan North - Traffic Violations Bureau (TVB)",

  f4a0d4f38392a8fad80e6db9890fb68f641df1cbcec62434df169982edeb9c6e:
    "Manhattan South - Traffic Violations Bureau (TVB)",

  "2a72087de98905257b00d3408dd0421a1082b53303159b04cbf5da672673fb4a":
    "Nassau - Bethpage",

  bcdeedf10b9b7f92097db7d887686d1df79e2acdcec31334f4efbbbd679c9320:
    "Nassau - Garden City",

  "512e28a9b920ee045bf588bf0de12289f3b06abf6623aaf228c145251a2a2b71":
    "Nassau - Massapequa",

  "07ba47584cb979f930533fe6de50c8fa5be76bee3f52598e6e9e38e8820880db":
    "Nassau - Oak Street License Center",

  "4a5ccf18dfe6a7d2b5025cea63d69605eddbe5ecbf820d44f8b69bd8ffac603c":
    "Onondaga - North Syracuse",

  bd268e31ce215e555815e79a142964560fca5b653a9f486d4e37a7e293a014ee:
    "Onondaga - Syracuse",

  fb052d6eae67926d8d5449d7317c8528e1e3d02b19441ead85f3150915e2abbe:
    "Queens - College Point",

  d0099bebf8e51979019b5e45b2c7dfeab9830f0213a4da0cfd569ec145eb07a9:
    "Queens - Jamaica",

  "887df9bcd65c813a07ac3ae5e818d4faec1aa02bb467ea5cb2e1e2e878bfa32a":
    "Queens - Queens College License Center",

  "2da2cfd743542bc26618bf7d35559501aee630de80c66a5f884f86d61bc5e780":
    "Queens - Springfield Gardens",

  d595326e4d0a22132503517b17441335141a5dfe249112365e044c85f0631ff0:
    "Queens North - Traffic Violations Bureau (TVB)",

  "0ac4c5008bb7758fd457422805b09f3d84cd1df9d0ed3ca651a018baca8dfc94":
    "Queens South - Traffic Violations Bureau (TVB)",

  "57eb2286cc842e01e1be5970f538e5548c3e624608ba3bef8b92b256569f003d":
    "Richmond - Staten Island",

  d03e4680536343341ea72455c3e9b02a4402645eb33830c059f777c0fffaa7d0:
    "Richmond - Traffic Violations Bureau (TVB)",

  "7f98a1734be1c8feb4b3f30dc7e9cf68fb7f1dce8c5eb7e4d76ed7ebb34e2136":
    "Rockland - West Haverstraw",

  "8d970b60f29441704f53fe8d08a389388cbbd7c2081232fb59d9289e3ac1bf35":
    "Suffolk - Dix Hills/Huntington",

  d0ab21c7180a46944a09a853677eb3357d8b53f4ea9f95651c5f154b5d3250ea:
    "Suffolk - Hauppauge",

  "8038f30cdf05b89c635d129eb40b032cd9fff65d13158319a2df996b55f4f597":
    "Suffolk - Medford",

  f11ab9eacb835e5e5d55e738c011f1dfc5bd39ca3064b9db2946d5bbedc2569d:
    "Suffolk - Port Jefferson",

  c366dfde60f1fc6007fbe3457b20d131b92a2273a8a2473968474e8acfb00a8b:
    "Suffolk - Riverhead",

  "1dfcc7900a35932a83e8b05b89d7c67e63a666dc4288bc73262712725787176d":
    "Westchester - Peekskill",

  ee9d5b38b121f0dd4a336a6f36aedff585229808390ebad45860feb74c2d5b63:
    "Westchester - White Plains",

  "46a32c2d34d1c7719a9e760613f0b7567b34987534a02d5be6cf98c6792a5110":
    "Westchester - Yonkers",
}


let serviceToLocMap = {
  "Motorcycle permit": locOnlyPermit,
  "Register Vehicle / Get plates": locOnlyReg
}

export { services, locById, locOnlyPermit, locOnlyReg, serviceToLocMap, locations  }
