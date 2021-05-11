db.resumoVoos.insertOne({ empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: db.voos.find({ $and: [{ "empresa.nome": { $eq: "LATAM AIRLINES BRASIL" } }, { natureza: { $eq: "Doméstica" } }] }).count() });

db.resumoVoos.findOne({ empresa: { $eq: "LATAM AIRLINES BRASIL" } }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
