/**
 * Exercício 3: Processamento de Dados de Vendas
 *
 * Crie um programa para gerenciar dados de vendas:
 *
 * - Tenha um array salesData contendo objetos representando vendas.
 *
 * - Escreva funções para:
 *   - Adicionar uma nova venda aos dados existentes. ✅
 *   - Remover uma venda com base na data ou em outro critério. ✅
 *   - Calcular o total de vendas para um determinado produto. ✅
 *   - Encontrar as vendas em um determinado período de tempo. ✅
 *   - Gerar um relatório com as vendas totais por produto. ✅
 */

const salesData = [
  {
    id: 1,
    product: "System SAAS",
    totalSales: 500,
    data: "2023/10/11",
  },
  {
    id: 2,
    product: "System SAAS",
    totalSales: 1320,
    data: "2023/11/11",
  },
  {
    id: 3,
    product: "System Test Unit",
    totalSales: 150,
    data: "2023/10/11",
  },
];

const addNewSaleProduct = (id) => {
  const productFound = salesData.find((product) => product.id === id);

  if (!productFound) throw `product wasn't found`;

  productFound.totalSales++;
};

const removeSale = (id) => {
  const productFound = salesData.find((product) => product.id === id);
  if (!productFound) throw `product wasn't found`;

  const indexSale = salesData.indexOf(productFound);

  return salesData.splice(indexSale, 1);
};

const totalSalesProduct = (name) => {
  const qtdSalesProduct = salesData
    .filter((product) => product.product === name)
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue.totalSales,
      0
    );
  if (!qtdSalesProduct) throw `products wasn't found`;

  return qtdSalesProduct;
};

/**
 *
 * @param {*} data // expected format yyyy/mm/dd
 */
const findSalesByDate = (data) => {
  const salesFound = salesData.filter((sale) => sale.data === data);

  if (salesFound.length === 0) throw `products wasn't found`;
  console.log(salesFound);
};

const reportSalesProduct = () => {
  const salesReport = {};

  // Iterar sobre os dados de vendas
  salesData.forEach((sale) => {
    // Se o produto ainda não estiver no relatório, inicialize-o com o total de vendas
    if (!salesReport[sale.product]) {
      salesReport[sale.product] = sale.totalSales;
    } else {
      // Se o produto já estiver no relatório, some o total de vendas existente com o novo total
      salesReport[sale.product] += sale.totalSales;
    }
  });

  // Retornar o relatório de vendas por produto
  return salesReport;
};

try {
  addNewSaleProduct(1);
  // removeSale(1);
  // console.log(totalSalesProduct("System SAAS"));
  // findSalesByDate("2023/11/11");
  console.log(reportSalesProduct());

  // console.log(salesData);
} catch (error) {
  console.log(error);
}
