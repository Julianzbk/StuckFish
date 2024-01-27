class Type:
    pass

class Pos:
    def __init__(self, tile: str):
        tile = tile.upper()
        self.x = ord(tile[0]) - 64 # No zero indexing
        self.y = int(tile[1])

    def __add__(self, other):
        if type(other) == Move:
            new_pos = Pos("a1")  # Dummy object
            new_pos.x = self.x + other.x
            new_pos.y = self.y + other.y
            return new_pos if new_pos.valid() else False

    def __sub__(self, other):
        if type(other) == Move:
            new_pos = Pos("a1") # Dummy object
            new_pos.x = self.x - other.x
            new_pos.y = self.y - other.y
            return new_pos

    def valid(self):
        return self.x > 0 and self.y > 0

    def __str__(self):
        return f"{chr(self.x + 64)}{self.y}"

    def __repr__(self):
        return f"Pos({chr(self.x)}{self.y})"

class Move:
    def __init__(self, x:int, y:int):
        self.x = x
        self.y = y
    def __repr__(self):
        return f"Move({self.x}, {self.y})"

class Piece:
    def __init__(self, piece_type, color: bool, pos: Pos):
        self.piece_type = piece_type
        self.color = color
        self.pos = pos
        self.moved = False # Flag for pawn

    def move(self):
        moves = self.piece_type.get_moves()
        for move in moves:
            if moves[move] is not None: # define and evaluate conditions here bc they're rare
                if eval(moves[move]):
                    self.pos += move
        self.moved = True
        # get available list of moves

    def __str__(self):
        return f"{self.piece_type}, {'White' if self.color else 'Black'}, {self.pos}"

class Pawn(Type):
    @staticmethod
    def get_moves():
        return {Move(0, -1): None, Move(0, -2): "self.moved == False"}
    def __str__(self):
        return "Pawn"

class Rook(Type):
    @staticmethod
    def get_moves():
        return {m : None for m in [Move(0, y) for y in range(0, -7, -1)] + [Move(x, 0) for x in range(7)]}
    def __str__(self):
        return "Rook"

class Bishop(Type):
    @staticmethod
    def get_moves():
        return [Move(x, x) for x in range(-7, 7)] + [Move(y, y) for y in range(-7, 7)]

class Knight(Type):
    @staticmethod
    def get_moves():
        return ["goofy ahh moves"]

class Queen(Type):
    @staticmethod
    def get_moves():
        return ["goofy ahh moves"]

class King(Type):
    @staticmethod
    def get_moves():
        return [Move(x, y) for x in range(-1, 2) for y in range(-1, 2)]

p = Piece(Pawn, False, Pos("a7"))
p.move()
print(p)
r = Piece(Rook, False, Pos("a8"))
r.move()
print(r)
