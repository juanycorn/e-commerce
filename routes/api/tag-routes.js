const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Get all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag,
          as: 'products',
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        },
      ],
    });
    res.status(200).json(tags);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get a single tag by its `id`
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag,
          as: 'products',
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        },
      ],
    });

    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create a new tag
router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(200).json(tag);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// Update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const [affectedRows] = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows === 0) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    const updatedTag = await Tag.findByPk(req.params.id);
    res.status(200).json(updatedTag);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// Delete a tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const result = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!result) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json({ message: 'Tag deleted successfully!' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
