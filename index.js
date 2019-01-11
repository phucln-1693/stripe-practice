const stripe = require(`stripe`)(`sk_test_xdlm5mgI9XwUvUL8dxd8ACmF`);

// stripe.charges.retrieve(`ch_1DrF3SHpJ69RA3WH1GlDSAYR`, {
//   api_key: `sk_test_xdlm5mgI9XwUvUL8dxd8ACmF`
// });


// Expand object
// stripe.charges.retrieve("ch_1DrF3SHpJ69RA3WH1GlDSAYR", {
//   expand: ["customer"]
// });


// Idempotent request
// stripe.charges.create({
//   amount: 2300,
//   currency: `usd`,
//   source: `tok_visa`,
//   description: `test charges idempotent request`
// },
//   {
//     idempotency_key: `NRwz6XTb65GqL5gG`
//   },
//   (err, charge) => {
//     if (err) console.log(`Idempotency errors: ${JSON.stringify(err)}`);
//     console.log(`charge infomation: ${JSON.stringify(charge)}`);
//   });

// Metadata
stripe.charges.create({
  amount: 2400,
  currency: `usd`,
  source: 'tok_mastercard', // obtained with Stripe.js
  metadata: {'order_id': '2'}
});