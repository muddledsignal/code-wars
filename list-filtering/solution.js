function filter_list(l) {
    function isPositiveInteger(x) {
      return typeof(x) === 'number';
    }
    return l.filter(isPositiveInteger);
  }