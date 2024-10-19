actor TraffixCanister {
  stable var reports : [Text] = [];

  public func addReport(report : Text) : async Bool {
    reports := reports # [report];
    return true;
  };

  public query func getReports() : async [Text] {
    return reports;
  };
}
