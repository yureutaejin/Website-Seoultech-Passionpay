from crud import crud

def test_index(db):
    something = crud.get_items(db)
    return something