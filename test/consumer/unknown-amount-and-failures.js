module.exports =
[ [ 'version', '13' ],
  [ 'comment', '# need to ping 6 servers\n' ],
  [ 'result',
    { id: 1, ok: true, name: 'retrieving servers from the database' } ],
  [ 'result', { id: 2, ok: true, name: 'pinged diamond' } ],
  [ 'result', { id: 3, ok: true, name: 'pinged ruby' } ],
  [ 'result',
    { id: 4,
      ok: false,
      name: 'pinged saphire',
      diag: { message: 'hostname "saphire" unknown', severity: 'fail' } } ],
  [ 'result', { id: 5, ok: true, name: 'pinged onyx' } ],
  [ 'result',
    { id: 6,
      ok: false,
      name: 'pinged quartz',
      diag: { message: 'timeout', severity: 'fail' } } ],
  [ 'result', { id: 7, ok: true, name: 'pinged gold' } ],
  [ 'plan', 7 ],
  [ 'complete',
    { plan: 7, count: 7, pass: 5, ok: false, fail: 2 } ] ]
