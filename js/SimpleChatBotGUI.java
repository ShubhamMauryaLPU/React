import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SimpleChatBotGUI extends JFrame implements ActionListener {
    private JTextField inputField;
    private JTextArea chatArea;
    private JButton sendButton;

    public SimpleChatBotGUI() {
        setTitle("Simple ChatBot");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        chatArea = new JTextArea();
        chatArea.setEditable(false);
        JScrollPane scrollPane = new JScrollPane(chatArea);
        add(scrollPane, BorderLayout.CENTER);

        JPanel bottomPanel = new JPanel(new BorderLayout());
        inputField = new JTextField();
        inputField.addActionListener(this);
        bottomPanel.add(inputField, BorderLayout.CENTER);

        sendButton = new JButton("Send");
        sendButton.addActionListener(this);
        bottomPanel.add(sendButton, BorderLayout.EAST);

        add(bottomPanel, BorderLayout.SOUTH);

        setSize(400, 300);
        setLocationRelativeTo(null);
        setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        String userInput = inputField.getText();
        displayMessage("You: " + userInput);
        inputField.setText("");

        String response = getResponse(userInput);
        displayMessage("Bot: " + response);
    }

    private String getResponse(String input) {
        String response;

        if (input.toLowerCase().contains("hello") || input.toLowerCase().contains("hi")) {
            response = "Hello there!";
        } else if (input.toLowerCase().contains("how are you")) {
            response = "I'm just a bot, but I'm doing well! How about you?";
        } else if (input.toLowerCase().contains("thanks") || input.toLowerCase().contains("thank you")) {
            response = "You're welcome!";
        } else if (input.toLowerCase().contains("who are you")) {
            response = "I'm a simple chatbot. You can ask me anything!";
        } else if (input.toLowerCase().contains("java")) {
            response = "Ah, Java! That's the language I'm written in!";
        } else {
            response = "I'm not sure I understand. Can you ask me something else?";
        }

        return response;
    }

    private void displayMessage(String message) {
        chatArea.append(message + "\n");
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new SimpleChatBotGUI());
    }
}
