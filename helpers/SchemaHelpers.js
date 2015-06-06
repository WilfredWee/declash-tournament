APPGLOBALS.SchemaHelpers = (function(){
  var SchemaHelpers = {
    getAverageRankForJudge: function(judge) {
      var totalRank = 0;

      _.each(judge.rankForRound, function(rank) {
        totalRank += rank;
      });

      var averageRank = judge.rankForRound? totalRank/(_.keys(judge.rankForRound).length) : 0;

      // Limit to 2 decimal places
      return Math.round(averageRank * 100) / 100;
    }
  }

  return SchemaHelpers;
})()
