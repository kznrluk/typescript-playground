(async () => {
    const name = 'mod' + 'ule/module';
    const mod = await import('./' + name);
    new mod.Module();
})();