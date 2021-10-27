package models;

public class billPay {

	private static address address;
	private static String name;
	private static String phoneNumber;
	private static String accountNumber;
	
	public billPay(address address, String name, String phoneNumber, String accountNumber)
	{
		this.address = address;
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.accountNumber = accountNumber;
	}
}
