import { message } from "antd";

export class MessageHelper {
	public static success = (msg, onClose?) => {
		message.success(msg, 2, onClose)
	}
}