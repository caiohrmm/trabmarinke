function processCsvRow(row) {
  const name = row.name?.trim();
  const age = row.age?.trim();
  const email = row.email?.trim();

  if (!name || !age || !email) {
    return null;
  }

  return { name, age, email };
}

module.exports = { processCsvRow };
