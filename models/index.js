// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});// Products belongsTo Category

Category.hasMany(Product, {
  foreignKey: 'category_id',
});// Categories have many Products

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});// Products belongToMany Tags (through ProductTag)

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
