import List "mo:core/List";
import Text "mo:core/Text";
import Time "mo:core/Time";

actor {
  type Address = {
    street : Text;
    city : Text;
    zip : Text;
    country : Text;
  };

  type Inquiry = {
    id : Nat;
    isPremium : Bool;
    name : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let inquiryList = List.empty<Inquiry>();
  var adminEmails = List.empty<Text>();
  var facebookLink : ?Text = null;
  var whatsappNumber : ?Text = null;
  var phoneNumber : ?Text = null;
  var location : ?Address = null;

  public shared ({ caller }) func addAdmin(email : Text) : async () {
    adminEmails.add(email);
  };

  public shared ({ caller }) func removeAdmin(email : Text) : async () {
    adminEmails := adminEmails.filter(func(e) { e != email });
  };

  public shared ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiryList.toArray();
  };

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, message : Text, isPremium : Bool) : async () {
    let id = inquiryList.size();
    let newInquiry : Inquiry = {
      id;
      isPremium;
      name;
      phone;
      message;
      timestamp = Time.now();
    };
    inquiryList.add(newInquiry);
  };

  public shared ({ caller }) func markAsPremium(id : Nat) : async () {
    let inquiry = inquiryList.at(id);
    let updatedInquiry : Inquiry = {
      id = inquiry.id;
      isPremium = true;
      name = inquiry.name;
      phone = inquiry.phone;
      message = inquiry.message;
      timestamp = inquiry.timestamp;
    };
    inquiryList.put(id, updatedInquiry);
  };

  public shared ({ caller }) func updateContact(fb : Text, whatsapp : Text, phone : Text, addr : Address) : async () {
    facebookLink := ?fb;
    whatsappNumber := ?whatsapp;
    phoneNumber := ?phone;
    location := ?addr;
  };

  public query ({ caller }) func getContactInfo() : async {
    facebook : ?Text;
    whatsapp : ?Text;
    phone : ?Text;
    address : ?Address;
  } {
    {
      facebook = facebookLink;
      whatsapp = whatsappNumber;
      phone = phoneNumber;
      address = location;
    };
  };

  public query ({ caller }) func getAllContactInfo() : async {
    facebook : ?Text;
    whatsapp : ?Text;
    phone : ?Text;
    address : ?Address;
    adminEmails : [Text];
  } {
    {
      facebook = facebookLink;
      whatsapp = whatsappNumber;
      phone = phoneNumber;
      address = location;
      adminEmails = adminEmails.toArray();
    };
  };
};
